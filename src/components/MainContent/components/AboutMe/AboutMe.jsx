
import { CiLocationOn } from 'react-icons/ci';

import { Linkedin } from '../../../Links/Linkedin';
import { Twitter } from '../../../Links/Twitter';
import { Github } from '../../../Links/Github';
import { Twitch } from '../../../Links/Twitch';
import { Instagram } from '../../../Links/Instagram';
import { Discord } from '../../../Links/Discord';

const AboutMe = () => {

    const elementBorderStyle = 'border-l-[1px] border-orange-400 p-2';

    const backgroundElementStyle = 'bg-dark/5 dark:bg-white/5 p-3 rounded-lg';

    return (
        <>
            <div className="personalPortfolioAboutMe h-screen lg:h-auto lg:w-1/2">
                <div className="aboutMeComponentContainer">
                    <div className={`boutMeComponentDescription ${backgroundElementStyle} mt-5`}>
                        <p className={`text-sm ${elementBorderStyle} flex flex-col`}>
                            <span className="text-gray-400 text-sm">Description</span>
                            <span>
                                Hi, I&#39;m Maxim, a dedicated and detail-oriented Front-End Web Developer with a passion for creating user-friendly and visually appealing web solutions. 
                                I am constantly looking to enhance my skills and knowledge to keep pace with the latest trends and best practices in the industry.
                            </span>
                        </p>
                    </div>
                </div>
                
                <div className="languagesContainer">
                    <div className={`languagesDescription ${backgroundElementStyle} mt-5`}>
                        <p className={`text-sm ${elementBorderStyle} flex flex-col`}>
                            <span className="text-gray-400 text-sm">Social Media</span>
                            <span>
                                <ul className='flex items-center gap-2 mt-2'>
                                    <li className='p-2 bg-white/5 rounded-lg'><Linkedin /> </li>
                                    <li className='p-2 bg-white/5 rounded-lg'><Github /> </li>
                                    <li className='p-2 bg-white/5 rounded-lg'><Twitter /> </li>
                                    <li className='p-2 bg-white/5 rounded-lg'><Twitch /> </li>
                                    <li className='p-2 bg-white/5 rounded-lg'><Instagram /> </li>
                                    <li className='p-2 bg-white/5 rounded-lg'><Discord /> </li>
                                </ul>
                            </span>
                        </p>
                    </div>
                </div>

                <div className="computerLanguagesContainer">
                    <div className={`computerLanguagesComponentDescription ${backgroundElementStyle} mt-5`}>
                        <p className={`text-sm ${elementBorderStyle} flex flex-col`}>
                            <span className="text-gray-400 text-sm">Languages</span>
                            <span>
                                <ul>
                                    <li>&gt; <a className='border-b' target='noreferrer _blank' href="https://en.wikipedia.org/wiki/Romanian_language">Romanian</a></li>
                                    <li>&gt; <a className='border-b' target='noreferrer _blank' href="https://en.wikipedia.org/wiki/Portuguese_language">Portuguese</a></li>
                                    <li>&gt; <a className='border-b' target='noreferrer _blank' href="https://en.wikipedia.org/wiki/English_language">English</a></li>
                                </ul>
                            </span>
                        </p>
                    </div>
                </div>

                <div className="locationContainer mt-5">
                    <div className={`locationComponentDescription ${backgroundElementStyle} mt-5`}>
                        <p className={`text-sm ${elementBorderStyle} flex flex-col`}>
                            <span className="text-gray-400 text-sm">Location</span>
                            <a 
                                href='https://goo.gl/maps/u49o5CZxcUck8Pwp9'
                                target='noreferrer _blank'
                                className='flex items-center'>
                                <CiLocationOn /> 
                                <span className="border-b">Alcobaça, Leiria &mdash; Portugal</span> 
                            </a>
                        </p>
                    </div>
                </div>

                <div className="personalSkillsContainer mt-5">
                    <div className={`personalSkillsComponentDescription ${backgroundElementStyle} mt-5`}>
                        <p className={`text-sm ${elementBorderStyle} flex flex-col`}>
                            <span className="text-gray-400 text-sm">Networking skills</span>
                            <span>
                                <ul>
                                    <li>&gt; Adaptability</li>
                                    <li>&gt; Communication</li>
                                    <li>&gt; Collaboration</li>
                                    <li>&gt; Patience</li>
                                    <li>&gt; Problem-solving</li>
                                    <li>&gt; Continuous learning</li>
                                </ul>
                            </span>
                        </p>
                    </div>
                </div>

                <div className="personalInterestsContainer mt-5">
                    <div className={`personalInterestsComponentDescription ${backgroundElementStyle} mt-5`}>
                        <p className={`text-sm ${elementBorderStyle} flex flex-col`}>
                            <span className="text-gray-400 text-sm">Interests</span>
                            <span>
                                <ul>
                                    <li>&gt; Video Games <span className="text-gray-400 text-[10px]">GTA V, CS:GO, PUBG</span></li>
                                    <li>&gt; Tech Industry <span className="text-gray-400 text-[10px]">Software Development</span></li>
                                    <li>&gt; New Technologies <span className="text-gray-400 text-[10px]">Gadgets, Consoles</span></li>
                                    <li >&gt; Sports <span className="text-gray-400 text-[10px]">Football, Volleyball, Ping Pong, Badminton</span></li>
                                </ul>
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
};
export default AboutMe;