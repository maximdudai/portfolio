
import { useState, useEffect } from 'react';
import { RiMenuFoldLine } from 'react-icons/ri';
import MobileMenu from './components/MobileMenu/MobileMenu';
import MaxDev from '../../assets/maxdev-logo.png';

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
        <nav className="w-full p-2 h-auto bg-slate-600 border-b-[1px] border-slate-400 flex md:justify-center md:flex-col md:w-2/6 md:h-screen xl:w-1/6">

            <div className="navigationContent w-full flex justify-between items-center md:h-screen md:flex-col md:justify-around">
                <div className="navLogo w-20 md:w-32">
                    <img 
                        src={MaxDev} 
                        alt="Portfolio Logo"
                    />
                </div>
                <div className="navMenu">
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
                        <div className='desktopNavigationContainer flex justify-around items-center'>
                            <div className="desktopNavigationLinksContainer flex flex-col justify-around items-center">
                                <div className="desktopNavigationLinkAboutMe mx-3 text-slate-200 font-semibold tracking-widest focus:outline-none hover:border-b-[1px] border-orange-400">
                                    <button className='text-md'>
                                        About Me
                                    </button>
                                </div>
                                <div className="desktopNavigationLinkProjects mx-3 text-slate-200 font-semibold tracking-widest focus:outline-none hover:border-b-[1px] border-orange-400">
                                    <button className='text-md'>
                                        Projects
                                    </button>
                                </div>
                                <div className="desktopNavigationLinkSkills mx-3 text-slate-200 font-semibold tracking-widest focus:outline-none hover:border-b-[1px] border-orange-400">
                                    <button className='text-md'>
                                        Skills
                                    </button>
                                </div>
                                <div className="desktopNavigationLinkResume mx-3 text-slate-200 font-semibold tracking-widest focus:outline-none hover:border-b-[1px] border-orange-400">
                                    <button className='text-md'>
                                        Resume
                                    </button>
                                </div>
                            </div>

                            <div className="desktopNavigationSocialContainer"></div>
                        </div>
                        }
                </div>
            </div>

        </nav>
    )
};
export default Navigation;