
import { useState, useEffect, useContext } from 'react';
import { RiMenuFoldLine } from 'react-icons/ri';
import MobileMenu from './components/MobileMenu/MobileMenu';
import MaxDev from '../../assets/maxdev-logo.png';

import './Style/NavigationStyle.scss';

import { Linkedin } from '../Links/Linkedin';
import { Twitter } from '../Links/Twitter';
import { Github } from '../Links/Github';

import clickAudio from '../../assets/sounds/click-sound.mp3'

import { AppTheme } from '../../context/WebTheme/AppTheme';

const Navigation = ({ selectedComponent }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [showMobileMenu, handleMobileMenu] = useState(false);
    const [activeComponent, setActiveComponent] = useState('AboutMe');

    const [isPlaying, setIsPlaying] = useState(false);
    const clickSound = new Audio(clickAudio);

    const { defaultTheme, handleAppTheme } = useContext(AppTheme);

    const handleButtonMobileMenu = () => {
        handleMobileMenu(!showMobileMenu);
    };

    const handleSetActiveComponent = (component) => {
        if(activeComponent === component) return;

        setActiveComponent(component);
        selectedComponent(component);

        if (!isPlaying) {
            clickSound.play();
        }
            

        setIsPlaying(false);

    };

    const toggleTheme = () => {
        handleAppTheme(!defaultTheme);
    };

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    

    const activeComponentStyle = 'border-r-[1px] border-gray-900 dark:border-gray-200';

    return (
        <nav className="w-full p-2 h-auto bg-black/[.05] border-b-[1px] border-slate-400 flex md:border-none md:flex-col md:w-2/6 md:h-screen xl:w-1/6">

            <div className="navigationContainer w-full flex items-center justify-between md:justify-normal md:h-screen md:flex-col">
                    
                <div className="navLogo w-20 md:w-64 md:bg-black/70 md:rounded-md dark:bg-transparent">
                    <img 
                        src={MaxDev} 
                        alt="Portfolio Logo"
                    />
                </div>

                <div className="navMenu md:w-full md:h-full">
                    {
                        width < 1024 ?
                        <div className="mobileMenuContainer">
                            <div className="mobileMenuToggleButton">
                                <button 
                                    onClick={handleButtonMobileMenu}
                                    className='text-2xl text-gray-200'
                                >

                                    <RiMenuFoldLine />
                                </button>
                            </div>

                            <div className="mobileMenuContent">
                                {
                                    showMobileMenu &&
                                    <MobileMenu toggleMobileMenu={handleButtonMobileMenu} />
                                }
                            </div>
                        </div>
                        :
                        <div className='desktopNavigationContainer h-full flex flex-col justify-between items-center'>
                            
                            <div className="desktopNavigationLinksContainer w-full flex flex-col justify-around items-center">
                                <div className={`desktopNavigationLinkAboutMe w-[105%] h-12 ${activeComponent === 'AboutMe' ? 'text-gray-600 dark:text-white' : 'text-gray-400'} font-semibold focus:outline-none dark:hover:text-white hover:border-r-[1px] border-orange-400 ${activeComponent === 'AboutMe' ? activeComponentStyle : ''}`}>
                                    <button 
                                        onClick={() => handleSetActiveComponent('AboutMe')}
                                        className='text-md w-full h-full p-2 tracking-widest'>
                                        About Me
                                    </button>
                                </div>
                                <div className={`desktopNavigationLinkProjects w-[105%] h-12 ${activeComponent === 'Projects' ? 'text-gray-600 dark:text-white' : 'text-gray-400'} font-semibold focus:outline-none dark:hover:text-white hover:border-r-[1px] border-orange-400 ${activeComponent === 'Projects' ? activeComponentStyle : ''}`}>
                                    <button 
                                        onClick={() => handleSetActiveComponent('Projects')}
                                        className='text-md w-full h-full p-2 tracking-widest'>
                                        Projects
                                    </button>
                                </div>
                                <div className={`desktopNavigationLinkSkills w-[105%] h-12 ${activeComponent === 'Skills' ? 'text-gray-600 dark:text-white' : 'text-gray-400'} font-semibold focus:outline-none dark:hover:text-white hover:border-r-[1px] border-orange-400 ${activeComponent === 'Skills' ? activeComponentStyle : ''}`}>
                                    <button 
                                        onClick={() => handleSetActiveComponent('Skills')}
                                        className='text-md w-full h-full p-2 tracking-widest'>
                                        Skills
                                    </button>
                                </div>
                                <div className={`desktopNavigationLinkResume w-[105%] h-12 ${activeComponent === 'Resume' ? 'text-gray-600 dark:text-white' : 'text-gray-400'} font-semibold focus:outline-none dark:hover:text-white hover:border-r-[1px] border-orange-400 ${activeComponent === 'Resume' ? activeComponentStyle : ''}`}>
                                    <button 
                                        onClick={() => handleSetActiveComponent('Resume')}
                                        className='text-md w-full h-full p-2 tracking-widest'>
                                        Resume
                                    </button>
                                </div>
                            </div>

                            <div className="desktopNavigationSocialContainer relative top-0 text-2xl w-full m-5 flex justify-around items-center">
                                <div className="desktopNavigationSocialLinkedin">
                                    <Linkedin />
                                </div>
                                <div className="desktopNavigationSocialTwitter">
                                    <Twitter />
                                </div>
                                <div className="desktopNavigationSocialGitHub">
                                    <Github />
                                </div>
                            </div>
                        </div>
                        }
                </div>
                <button
                    onClick={toggleTheme}
                >
                    toggle
                </button>
            </div>

        </nav>
    )
};
export default Navigation;