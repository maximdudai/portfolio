
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
        <nav className="w-full p-2 h-auto bg-slate-600 border-b-[1px] border-slate-400 flex md:justify-center">

            <div className="navigationContent w-full flex justify-between items-center md:container mx-auto">
                <div className="navLogo w-20">
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
                        <div className='desktopNavigation'>
                            something
                        </div>
                        }
                </div>
            </div>

        </nav>
    )
};
export default Navigation;