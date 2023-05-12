import PropTypes from 'prop-types';


import { Github } from '../../../../Links/Github';
import { BsWindowFullscreen } from 'react-icons/bs';

import AppStack from '../stack/AppStack.jsx';
import { personalProjects } from '../data/ProjectsData';

const mobileSelectedProjectTitle = 'text-lg tracking-widest';

const ProjectMobile = ({selectedProject, onModalClose}) => {

    return (
        <>
            <div className="selectProjectMobile p-3 flex flex-col h-full items-center justify-center absolute inset-0 z-20 dark:bg-dark dark:text-gray-200">

                <div className="closeProjectSelectedPage rounded-full text-center">
                    <button
                        onClick={onModalClose}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="mobileSelectedProjectTitle w-full bg-white/5 text-center p-2 rounded my-4">
                    <h3 className={`${mobileSelectedProjectTitle}`}>{personalProjects[selectedProject - 1].projectName}</h3>
                </div>

                <div className="mobileSelectedProjectImage">
                    <img 
                        className="w-auto"
                        src={personalProjects[selectedProject - 1].imageURL} 
                        alt="Project Image" />
                </div>
                
                <div className="mobileSelectedProjectLinks w-full flex flex-col bg-white/5 text-center p-2 rounded my-4">
                    <div className="mobileSelectorProjectDescriptionTitle w-full text-center bg-white/5 py-2 rounded">
                        <h3 className={`${mobileSelectedProjectTitle}`}>Behind the Scenes</h3>
                    </div>

                    <div className="mobileSelectedProjectLinkAddress my-2 flex gap-2">
                        {
                            personalProjects[selectedProject - 1].liveVersion !== '' &&
                            <button className='bg-white/10 p-2 rounded flex flex-col items-center justify-between'>
                                <a href={personalProjects[selectedProject - 1].liveVersion}><BsWindowFullscreen className='w-6 h-6' /></a>
                                <span className='text-[12px] bg-white/10 mt-1 p-1 w-full rounded'>LIVE</span>
                            </button>
                        }

                        <button className='bg-white/10 p-2 rounded flex flex-col justify-center items-center'>
                            <Github customLink={personalProjects[selectedProject - 1].githubURL} />
                            <span className='text-[12px] bg-white/10 mt-1 p-1 w-full rounded'>CODE</span>
                        </button>
                    </div>
                </div>

                <div className="mobileSelectedProjectDescription bg-white/5 text-center p-2 rounded my-4">
                    <div className="mobileSelectorProjectDescriptionTitle w-full text-center bg-white/5 py-2 rounded">
                        <h3 className={`${mobileSelectedProjectTitle}`}>Description</h3>
                    </div>
                    <p className='py-2'>{personalProjects[selectedProject - 1].description}</p>
                </div>

                <div className={`mobileSelectedProjectStack w-full flex flex-col bg-white/5 text-center p-2 rounded my-4`}>
                    <div className="mobileSelectedProjectStackTitle w-full text-center bg-white/5 py-2 rounded">
                        <h3 className={`${mobileSelectedProjectTitle}`}>Stack</h3>
                    </div>
                    <ul className='p-2 flex justify-evenly gap-2 flex-wrap'>
                        {personalProjects[selectedProject - 1].stack.map((item, index) => (
                            <li key={index} className='bg-white/5 min-w-[6rem] p-2 mr-2 rounded flex flex-col justify-center items-center'>
                                <AppStack stack={item.toLowerCase()} />
                                <span className='text-[12px] bg-white/10 mt-1 p-1 w-full rounded'>{item}</span>
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