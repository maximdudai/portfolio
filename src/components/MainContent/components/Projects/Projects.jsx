import { useState, useEffect } from "react";

import { personalProjects } from "./data/ProjectsData";
import ProjectMobile from "./ProjectMobile/ProjectMobile";
import { ImageCarousel } from "./ImageCarousel/ImageCarousel";
import { ProjectTitle } from "./components/Title";
import { Description } from "./components/Description";
import { Stack } from "./components/Stack";
import { Sources } from "./components/Sources";

import "./style/project.style.scss";

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectedProject = (project) => {
    setSelectedProject(project);
  };

  const onUserCloseProjectPage = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectContainerStyle =
    "flex flex-col justify-between items-center bg-black/25 dark:bg-gray-400/5 rounded-md my-3";
  const projectContainerImage = "rounded-md p-3";

  return (
    <>
      <div className="portfolioProjects w-full h-full lg:h-full lg:flex items-center">
        <div className="projectsContainer flex items-center">
          <div className="projectContainerList w-full lg:w-2/6">
            <div
              className={`projectsList h-full p-3 overflow-none md:overflow-y-auto lg:max-h-[50rem]`}
            >
              <ul>
                {personalProjects.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSelectedProject(index)}
                      className={`project ${projectContainerStyle}`}
                    >
                      <div className="projectImage">
                        <img
                          className={`${projectContainerImage}`}
                          src={personalProjects[index].imageURL}
                          alt="Project Images"
                        />
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
          {width <= 1024 && selectedProject !== null ? (
            <ProjectMobile
              screenWidth={width}
              onModalClose={onUserCloseProjectPage}
              selectedProject={selectedProject}
            />
          ) : (
            <div className="projectContainerSelected hidden lg:flex justify-center p-5 w-full">
              <div className="selectedProject bg-white/50 dark:bg-dark w-full xl:min-h-[40rem] flex justify-center items-center">
                {selectedProject !== null ? (
                  <div className="selectedProjectDesktop w-full flex flex-col justify-center items-center">
                    <ProjectTitle selectedProject={selectedProject} />

                    <div className="projectImage w-full flex justify-center">
                      {
                        <ImageCarousel
                          screenWidth={width}
                          projectName={personalProjects[
                            selectedProject
                          ]?.projectName
                            .split(" ")
                            .join("")
                            .toLowerCase()}
                          imageSize={100}
                        />
                      }
                    </div>

                    <div className="projectDetails w-full gap-2 flex justify-center items-center">
                      <div className="projectDataInformations w-full flex flex-col min-h-content">
                        <Description selectedProject={selectedProject} />

                        <Stack selectedProject={selectedProject} />
                      </div>

                      {personalProjects[selectedProject].githubURL !== "" ||
                        (personalProjects[selectedProject].liveVersion !==
                          "" && (
                          <div className="selectedProjectLinks flex flex-col bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4">
                            <Sources selectedProject={selectedProject} />
                          </div>
                        ))}
                    </div>
                  </div>
                ) : (
                  <div className="noProjectSelected w-96 h-96 border-4 border-double rounded flex justify-center items-center">
                    <span className="bg-black/25 dark:bg-black/25 p-2 rounded tracking-widest text-center cursor-wait">
                      👈 choose one
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Projects;
