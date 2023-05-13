import { useState, useEffect } from 'react'


import { personalProjects } from './data/ProjectsData';
import { AppStack } from './stack/AppStack';

import { Github } from '../../../Links/Github';

import ProjectMobile from './ProjectMobile/ProjectMobile';
import './style/project.style.scss';
import { ImageCarousel } from './ImageCarousel/ImageCarousel';

import { BsWindowFullscreen } from 'react-icons/bs';

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
    const selectedProjectTitle = 'text-md md:text-sm tracking-widest';

    return (
        <>
            <div className="portfolioProjects w-full h-full flex items-center">
                <div className="projectsContainer flex items-center">
                    <div className="projectContainerList w-full lg:w-2/6">
                        <div className={`projectsList p-3 overflow-none md:overflow-y-auto max-h-[50rem]`}>
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
                                                    alt="Project Images" />

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
                    {
                        width <= 1024 && selectedProject !== null? ( 
                            <ProjectMobile 
                                onModalClose={onUserCloseProjectPage}
                                selectedProject={selectedProject}
                            />
                        ):
                        <div className="projectContainerSelected hidden lg:flex justify-center p-5 w-full h-screen">
                            <div className="selectedProject bg-white/50 dark:bg-dark w-auto min-h-[40rem] flex justify-center items-center">
                                {
                                    selectedProject !== null? (
                                    <div className="selectedProjectDesktop w-full flex flex-col justify-center items-center">
                                        <div className="projectTitle w-1/2 uppercase tracking-widest bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4">
                                            <h3>{personalProjects[selectedProject].projectName}</h3>
                                        </div>
                                        
                                        <div className="projectImage w-full flex justify-center">
                                            {
                                                <ImageCarousel projectName={personalProjects[selectedProject]?.projectName.split(' ').join('').toLowerCase()} imageSize={100}/>                                            
                                            }
                                        </div>
                                        
                                        <div className="projectDetails w-full gap-2 flex justify-center items-center">
                                            
                                            <div className="projectDataInformations flex flex-col">
                                                <div className="projectDataDescriptionContainer h-28 bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4">
                                                    <div className="selectorProjectDescriptionTitle text-center bg-dark/25 dark:bg-white/5 py-2 rounded border-2 border-gray-600/50">
                                                        <h3 className={`${selectedProjectTitle}`}>Description</h3>
                                                    </div>
                                                    <p className='py-2 text-left text-md md:text-sm'>{personalProjects[selectedProject].description}</p>
                                                </div>

                                                <div className={`selectedProjectStack h-auto flex flex-col bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4`}>
                                                    <div className="selectedProjectStackTitle w-full text-center bg-dark/25 dark:bg-white/5 py-2 rounded border-2 border-gray-600/50">
                                                        <h3 className={`${selectedProjectTitle}`}>Stack</h3>
                                                    </div>
                                                    <ul className='p-2 flex gap-2 flex-wrap'>
                                                        {personalProjects[selectedProject].stack.map((item, index) => (
                                                            <li key={index} className='bg-dark/25 dark:bg-white/5 min-w-[6rem] p-2 rounded flex flex-col justify-between items-center'>
                                                                <AppStack stack={item.toLowerCase()} />
                                                                <span className='text-[12px] bg-white/5 dark:bg-white/10 mt-1 p-1 w-full rounded border-[1.5px] border-gray-400/50'>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>


                                            <div className="selectedProjectLinks flex flex-col bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4">
                                                <div className="selectedProjectLinkAddress my-2 flex flex-col h-[15.5rem] justify-evenly gap-2">
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
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>        
        </>
    )
};
export default Projects;