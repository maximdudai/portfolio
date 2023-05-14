import PropTypes from 'prop-types';

import { personalProjects } from "../data/ProjectsData";

import { Github } from "../../../../Links/Github";
import { BsWindowFullscreen } from "react-icons/bs";

export const Sources = ({ selectedProject }) => {
    return (
        <>
            <div className="sourceLinks w-full bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4 lg:dark:bg-transparent">
                <div className="sourceLinksTitle flex lg:hidden">
                    <div className="selectedProjectStackTitle w-full text-center bg-dark/25 dark:bg-white/5 py-2 rounded border-2 border-gray-600/50">
                        <h3 className={`text-md md:text-sm tracking-widest`}>Source</h3>
                    </div>
                </div>
                <div className="selectedProjectLinkAddress w-auto my-2 flex lg:flex-col lg:h-[12.5rem] lg:justify-between gap-3">
                    {
                        personalProjects[selectedProject].liveVersion !== '' &&
                        <button className='bg-white/5 dark:bg-white/10 p-2 rounded flex flex-col items-center justify-between border-[1.5px] border-gray-400/50'>
                            <a href={personalProjects[selectedProject].liveVersion} target='_blank' rel="noopener noreferrer">
                                <BsWindowFullscreen className='w-6 h-6' />
                            </a>
                            <span className='text-[12px] bg-white/5 dark:bg-white/10 mt-1 p-1 w-full rounded'>LIVE</span>
                        </button>
                    }

                    <button className='bg-white/5 dark:bg-white/10 p-2 rounded flex flex-col justify-center items-center border-[1.5px] border-gray-400/50'>
                        <Github customLink={personalProjects[selectedProject].githubURL} />
                        <span className='text-[12px] bg-white/5 dark:bg-white/10 mt-1 p-1 w-full rounded'>CODE</span>
                    </button>
                </div>
            </div>

        </>
    )
};

Sources.propTypes = { 
    selectedProject: PropTypes.number
};