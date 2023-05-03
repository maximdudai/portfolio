
import { useState, useEffect } from 'react';
import { RiMenuFoldLine } from 'react-icons/ri';
import MobileMenu from './components/MobileMenu/MobileMenu';
import MaxDev from '../../assets/maxdev-logo.png';

import './Style/NavigationStyle.scss';

import { SlSocialLinkedin } from 'react-icons/sl';
import { RxTwitterLogo } from 'react-icons/rx';
import { VscGithubAlt } from 'react-icons/vsc';
import { BiDotsHorizontalRounded } from 'react-icons/bi'


const Navigation = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [showMobileMenu, handleMobileMenu] = useState(false);

    const handleButtonMobileMenu = () => {
        handleMobileMenu(!showMobileMenu);
    };

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    return (
        <nav className="w-full p-2 h-auto bg-slate-600 border-b-[1px] border-slate-400 flex md:border-none md:justify-center md:flex-col md:w-2/6 md:h-screen xl:w-1/6">

            <div className="navigationContent w-full flex justify-between items-center md:h-screen md:flex-col md:justify-center">
                <div className="navLogo w-20 md:w-32">
                    <img 
                        src={MaxDev} 
                        alt="Portfolio Logo"
                    />
                </div>
                <div className="navMenu w-full">
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
                        <div className='desktopNavigationContainer w-full flex flex-col justify-around items-center'>
                            
                            <div className="desktopNavigationSocialContainer w-full m-5 flex justify-around items-center">
                                <div className="desktopNavigationSocialLinkedin">
                                    <a href="/"><SlSocialLinkedin /></a>
                                </div>
                                <div className="desktopNavigationSocialTwitter">
                                    <a href="/"><RxTwitterLogo /></a>
                                </div>
                                <div className="desktopNavigationSocialGitHub">
                                    <a href="/"><VscGithubAlt /></a>
                                </div>
                            </div>

                            <div className="desktopNavigationLinksContainer w-full flex flex-col justify-around items-center">
                                <div className="desktopNavigationLinkAboutMe w-[104.5%] h-10 my-2 text-slate-200 font-semibold tracking-widest focus:outline-none hover:bg-gray-500">
                                    <button className='text-md bg-dark w-full p-2 tracking-widest'>
                                        About Me
                                    </button>
                                </div>
                                <div className="desktopNavigationLinkProjects w-[104.5%] h-10 my-2 text-slate-200 font-semibold tracking-widest focus:outline-none hover:bg-gray-500">
                                    <button className='text-md w-full p-2 tracking-widest'>
                                        Projects
                                    </button>
                                </div>
                                <div className="desktopNavigationLinkSkills w-[104.5%] h-10 my-2 text-slate-200 font-semibold tracking-widest focus:outline-none hover:bg-gray-500">
                                    <button className='text-md w-full p-2 tracking-widest'>
                                        Skills
                                    </button>
                                </div>
                                <div className="desktopNavigationLinkResume w-[104.5%] h-10 my-2 text-slate-200 font-semibold tracking-widest focus:outline-none hover:bg-gray-500">
                                    <button className='text-md w-full p-2 tracking-widest'>
                                        Resume
                                    </button>
                                </div>
                            </div>

                        </div>
                        }
                </div>
            </div>

        </nav>
    )
};
export default Navigation;