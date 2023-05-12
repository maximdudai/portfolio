import PropTypes from 'prop-types';

import AppStack from '../stack/AppStack.jsx';

import { personalProjects } from '../data/ProjectsData';

const ProjectMobile = ({selectedProject, onModalClose}) => {

    return (
        <>
            <div className="selectProjectMobile p-3 flex flex-col h-full items-center justify-center absolute inset-0 z-20 bg-white dark:bg-dark dark:text-gray-200">

                <div className="closeProjectSelectedPage bg-white/20 mt-5 w-10 h-10 rounded-full text-center absolute top-0 flex items-center justify-center">
                    <button
                        onClick={onModalClose}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="mobileSelectedProjectTitle w-full bg-white/5 text-center p-2 rounded my-4">
                    <h3 className='text-lg tracking-widest'>{personalProjects[selectedProject - 1].projectName}</h3>
                </div>

                <div className="mobileSelectedProjectImage">
                    <img 
                        className="w-auto"
                        src={personalProjects[selectedProject - 1].imageURL} 
                        alt="Project Image" />
                </div>

                <div className="mobileSelectedProjectDescription">
                    <p>{personalProjects[selectedProject - 1].description}</p>
                </div>

                <div className="mobileSelectedProjectStack w-full flex flex-col bg-white/5 text-center p-2 rounded my-4">
                    <div className="mobileSelectedProjectStackTitle w-full text-center bg-white/5 py-2 rounded">
                        <h3 className='text-lg tracking-widest'>Stack</h3>
                    </div>
                    <ul className='p-2 flex flex-wrap gap-2 justify-evenly'>
                        {personalProjects[selectedProject - 1].stack.map((item, index) => (
                            <li key={index} className='bg-white/5 p-2 mr-2 rounded flex flex-col justify-center items-center'>
                                <AppStack stack={item.toLowerCase()} />
                                <span className='text-[12px]'>{item}</span>
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