import { RiMenuUnfoldLine } from 'react-icons/ri';

import MaxDev from '../../../../assets/maxdev-logo.png';
import './Style/MobileMenuStyle.scss'

import { BiDotsHorizontalRounded } from 'react-icons/bi'

import { Github } from '../../../Links/Github';
import { Linkedin } from '../../../Links/Linkedin';
import { Twitter } from '../../../Links/Twitter';

const MobileMenu = ({ toggleMobileMenu }) => {
    return (
        <>
            <div className="mobileMenu overflow-hidden absolute inset-0 w-screen h-screen bg-gray-200 dark:bg-slate-800">
                <div className="mobileMenuNavbarContent w-full flex justify-between items-center p-2 px-3">
                    
                    <div className="mobileMenuCloseModal">
                        <button
                            className='text-2xl text-gray-900 dark:text-gray-200'
                            onClick={toggleMobileMenu}
                        >
                            <RiMenuUnfoldLine />
                        </button>
                    </div>

                    <div className="mobileMenuLogo rounded-full bg-slate-600 dark:bg-transparent">
                        <img 
                            className='w-20'
                            src={MaxDev}
                            alt={'Portfolio Logo'}
                        />
                    </div>

                </div>

                <div className="mobileMenuContainer p-4 w-full h-full flex flex-col justify-evenly">
        
                    <div className="mobileMenuSocialContainer w-full flex flex-col items-center">
                        
                        <div className="mobileMenuSocialTitle text-center w-full p-2 border-b-[1px] border-orange-400 bg-slate-600 rounded-md dark:bg-transparent dark:rounded-none">
                            <h2 className='mobileMenuSocialLinkContent uppercase font-semibold tracking-widest text-gray-200'>social links</h2>
                        </div>

                        <div className="mobileMenuSocialContent w-full flex justify-evenly mt-5">
                            <div className="mobileMenuSocialLinkedin">
                                <button>
                                    <Linkedin />
                                </button>
                            </div>

                            
                            <div className="mobileMenuSocialTwitter">
                                <button>
                                    <Twitter />
                                </button>
                            </div>

                            
                            <div className="mobileMenuSocialGithub">
                                <button>
                                    <Github />
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="mobileMenuContainer w-full flex flex-col items-center">
                        <div className="mobileMenuPageTitle text-center w-full p-2 border-b-[1px] border-orange-400 bg-slate-600 rounded-md dark:bg-transparent dark:rounded-none">
                            <h2 className='mobileMenuSocialLinkContent uppercase font-semibold tracking-widest text-gray-200'>Explore</h2>
                        </div>

                        <div className="mobileMenuPageAboutMe w-full flex justify-center">
                            <button
                                className='flex w-full justify-between items-center py-2'
                            >
                                <span className='w-auto font-semibold text-left'>About Me</span>
                                <span><BiDotsHorizontalRounded /></span>
                            </button>

                        </div>
                        <div className="mobileMenuPageProjects w-full flex justify-center">
                            <button
                                className='flex w-full justify-between items-center py-2'
                            >
                                <span className='w-auto font-semibold text-left'>Projects</span>
                                <span><BiDotsHorizontalRounded /></span>
                            </button>
                        </div>
                        <div className="mobileMenuPageSkills w-full flex justify-center">
                            <button
                                className='flex w-full justify-between items-center py-2'
                            >
                                <span className='w-auto font-semibold text-left'>Skills</span>
                                <span><BiDotsHorizontalRounded /></span>
                            </button>
                        </div>
                        <div className="mobileMenuPageResume w-full flex justify-center">
                            <button
                                className='flex w-full justify-between items-center py-2'
                            >
                                <span className='w-auto font-semibold text-left'>Resume</span>
                                <span><BiDotsHorizontalRounded /></span>
                            </button>
                        </div>
                    </div>

                    <div className="mobileMenuContactMe mb-5 w-full flex justify-center">
                        <button
                            className='font-semibold tracking-widest border-[1px] w-full p-2 rounded-lg bg-slate-600 dark:bg-transparent text-gray-200'    
                        >
                            Contact Me!
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
};
export default MobileMenu;
