import { useState, useEffect } from 'react'


import { personalProjects } from './data/ProjectsData';

import ProjectMobile from './ProjectMobile/ProjectMobile';
import './style/project.style.scss';
import { ImageCarousel } from './ImageCarousel/ImageCarousel';

const Projects = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const [selectedProject, setSelectedProject] = useState(null);

    const handleSelectedProject = (project) => {
        setSelectedProject(project)
    };

    const onUserCloseProjectPage = () => {
        setSelectedProject(null);
    };


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const projectContainerStyle = 'flex flex-col justify-between items-center bg-gray-400/5 rounded-md my-3';
    const projectContainerImage = 'rounded-md p-3';
    return (
        <>
            <div className="portfolioProjects w-full h-full flex items-center">
                <div className="projectsContainer md:mt-0 flex">
                    <div className="projectContainerList w-full lg:w-2/6">
                        <div className={`projectsList p-3 overflow-y-auto max-h-[50rem]`}>
                            <ul>
                                {personalProjects.map((item, index) => (
                                    <li
                                        key={index}
                                    >
                                        <button 
                                            onClick={() => handleSelectedProject(index)}
                                            className={`project ${projectContainerStyle}`}>
                                            <div className="projectImage">
                                                
                                                <img 
                                                    className={`${projectContainerImage}`}
                                                    src={personalProjects[index].imageURL} 
                                                    alt="Mandachi Project" />

                                            </div>
                                            <div className="projectTitle uppercase tracking-widest">
                                                {personalProjects[index].projectName}
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="projectContainerSelected w-full">
                        <div className="selectedProject bg-white/50 dark:bg-dark w-auto h-[40rem] flex justify-center items-center">
                            {
                                selectedProject !== null && width <= 1024? (
                                    <ProjectMobile 
                                        onModalClose={onUserCloseProjectPage}
                                        selectedProject={selectedProject}
                                    />

                                ) : (
                                    selectedProject !== null? (
                                    <div className="selectedProjectDesktop w-full">
                                        
                                        <div className="projectImage w-full p-5">
                                            <ImageCarousel projectName='mandachi'/>                                            
                                        </div>
                                        
                                        <div className="projectTitle uppercase tracking-widest">
                                            {personalProjects[selectedProject]?.projectName}
                                        </div>

                                    </div>
                                    )
                                    :
                                    (
                                        <div className="noProjectSelected w-96 h-96 border-4 border-double rounded flex justify-center items-center">
                                            <span className='bg-white/25 dark:bg-black/25 p-2 rounded tracking-widest text-center cursor-wait'>
                                                👈 choose one
                                            </span>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
};
export default Projects;