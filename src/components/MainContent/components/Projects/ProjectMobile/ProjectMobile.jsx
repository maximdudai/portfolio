import PropTypes from 'prop-types';


import { Github } from '../../../../Links/Github';
import { BsWindowFullscreen } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import AppStack from '../stack/AppStack.jsx';
import { personalProjects } from '../data/ProjectsData';

const mobileSelectedProjectTitle = 'text-lg tracking-widest';

const ProjectMobile = ({selectedProject, onModalClose}) => {

    return (
        <>
            <div className="selectProjectMobile fixed overflow-y-auto flex flex-col z-10 inset-0 p-2 bg-white dark:bg-dark dark:text-gray-200">

                <div className="mobileSelectedProjectCloseMenu w-full text-center">
                    <button
                        className='p-2 bg-dark/25 dark:bg-white/5 rounded-full border-2 border-gray-600/50'
                        onClick={onModalClose}
                    >
                        <AiOutlineClose />
                    </button>
                </div>

                <div className="mobileSelectedProjectTitle w-full bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4 border-2 border-gray-600/50">
                    <h3 className={`${mobileSelectedProjectTitle}`}>{personalProjects[selectedProject].projectName}</h3>
                </div>

                <div className="mobileSelectedProjectImage">
                    <img 
                        className="w-auto"
                        src={personalProjects[selectedProject].imageURL} 
                        alt="Project Image" />
                </div>
                
                <div className="mobileSelectedProjectLinks w-full flex flex-col bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4">
                    <div className="mobileSelectorProjectDescriptionTitle w-full text-center bg-dark/25 dark:bg-white/5 py-2 rounded border-2 border-gray-600/50">
                        <h3 className={`${mobileSelectedProjectTitle}`}>Behind the Scenes</h3>
                    </div>

                    <div className="mobileSelectedProjectLinkAddress my-2 flex gap-2">
                        {
                            personalProjects[selectedProject].liveVersion !== '' &&
                            <button className='bg-white/5 dark:bg-white/10 p-2 rounded flex flex-col items-center justify-between border-[1.5px] border-gray-400/50'>
                                <a href={personalProjects[selectedProject].liveVersion}><BsWindowFullscreen className='w-6 h-6' /></a>
                                <span className='text-[12px] bg-white/5 dark:bg-white/10 mt-1 p-1 w-full rounded'>LIVE</span>
                            </button>
                        }

                        <button className='bg-white/5 dark:bg-white/10 p-2 rounded flex flex-col justify-center items-center border-[1.5px] border-gray-400/50'>
                            <Github customLink={personalProjects[selectedProject].githubURL} />
                            <span className='text-[12px] bg-white/5 dark:bg-white/10 mt-1 p-1 w-full rounded'>CODE</span>
                        </button>
                    </div>
                </div>

                <div className="mobileSelectedProjectDescription bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4">
                    <div className="mobileSelectorProjectDescriptionTitle w-full text-center bg-dark/25 dark:bg-white/5 py-2 rounded border-2 border-gray-600/50">
                        <h3 className={`${mobileSelectedProjectTitle}`}>Description</h3>
                    </div>
                    <p className='py-2'>{personalProjects[selectedProject].description}</p>
                </div>

                <div className={`mobileSelectedProjectStack w-full flex flex-col bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4`}>
                    <div className="mobileSelectedProjectStackTitle w-full text-center bg-dark/25 dark:bg-white/5 py-2 rounded border-2 border-gray-600/50">
                        <h3 className={`${mobileSelectedProjectTitle}`}>Stack</h3>
                    </div>
                    <ul className='p-2 flex justify-evenly gap-2 flex-wrap'>
                        {personalProjects[selectedProject].stack.map((item, index) => (
                            <li key={index} className='bg-dark/25 dark:bg-white/5 min-w-[6rem] p-2 mr-2 rounded flex flex-col justify-center items-center'>
                                <AppStack stack={item.toLowerCase()} />
                                <span className='text-[12px] bg-white/5 dark:bg-white/10 mt-1 p-1 w-full rounded border-[1.5px] border-gray-400/50'>{item}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </>
    )
};
export default ProjectMobile;

ProjectMobile.propTypes = {
    selectedProject: PropTypes.number,
    onModalClose: PropTypes.func.isRequired
};