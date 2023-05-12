import { useState, useEffect } from 'react'


import mandachiProject from './assets/mandachi-project.png';
import bookShop from './assets/bookShop-project.png';
import githubSearch from './assets/githubSearch.png';
import moneyConverter from './assets/moneyConverter.png';

import ProjectMobile from './ProjectMobile/ProjectMobile';
import './style/project.style.scss';

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
                    <div className="projectContainerList w-full md:w-1/3 lg:w-1/4">
                        <div className="projectsList p-3 overflow-auto md:max-h-[40rem]">
                            <ul>
                                <li>
                                    <button 
                                        onClick={() => handleSelectedProject(1)}
                                        className={`project ${projectContainerStyle}`}>
                                        <div className="projectImage">
                                            
                                            <img 
                                                className={projectContainerImage} 
                                                src={mandachiProject} 
                                                alt="Mandachi Project" />

                                        </div>
                                        <div className="projectTitle uppercase tracking-widest">
                                            Mandachi Hotel
                                        </div>
                                    </button>
                                </li>

                                <li>
                                    <button 
                                        onClick={() => handleSelectedProject(2)}
                                        className={`project ${projectContainerStyle}`}>
                                        <div className="projectImage">
                                            
                                            <img 
                                                className={projectContainerImage} 
                                                src={bookShop} 
                                                alt="bookShop Project" />

                                        </div>
                                        <div className="projectTitle uppercase tracking-widest">
                                            eBook Shop
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => handleSelectedProject(3)}
                                        className={`project ${projectContainerStyle}`}>
                                        <div className="projectImage">
                                            
                                            <img 
                                                className={projectContainerImage} 
                                                src={moneyConverter} 
                                                alt="Mandachi Project" />

                                        </div>
                                        <div className="projectTitle uppercase tracking-widest">
                                            Currency Converter
                                        </div>
                                    </button>
                                </li>

                                <li>
                                    <button 
                                        onClick={() => handleSelectedProject(4)}
                                        className={`project ${projectContainerStyle}`}>
                                        <div className="projectImage">
                                            
                                            <img 
                                                className={projectContainerImage} 
                                                src={githubSearch} 
                                                alt="bookShop Project" />

                                        </div>
                                        <div className="projectTitle uppercase tracking-widest">
                                            Github Search
                                        </div>
                                    </button>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="projectContainerSelected">
                        <div className="selectedProject">
                            {
                                selectedProject !== null && width <= 1024? (
                                    <ProjectMobile 
                                        onModalClose={onUserCloseProjectPage}
                                        selectedProject={selectedProject}
                                    />

                                ) : (
                                    <div className="selectedProjectDesktop">

                                    </div>
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