import { MdLineStyle, MdSettingsEthernet } from "react-icons/md";
import { BsTools } from "react-icons/bs";

import {
  frontendStack,
  backendStack,
  toolsStack,
} from "../Projects/stack/StackData";
const frontendStackArray = Object.entries(frontendStack);
const backendStackArray = Object.entries(backendStack);
const toolsStackArray = Object.entries(toolsStack);

const Skills = () => {
  return (
    <>
      <div className="portfolioSkills w-full lg:flex lg:flex-row gap-2">
        <div className="frontendSkills lg:w-1/3 bg-black/10 dark:bg-white/10 rounded p-1 shadow-sm shadow-black">
          <div className="skillsContainerTitle flex items-center justify-between border-b-[1px] border-white/10 rounded mb-3">
            <h1 className="p-2 bg-black/10 dark:bg-white/10 uppercase rounded tracking-widest">
              front end
            </h1>
            <span className="p-2 bg-black/10 dark:bg-white/10 rounded text-2xl">
              <MdLineStyle />
            </span>
          </div>
          <div className="skillsContainerContent">
            <ul className="frontendList w-full">
              {frontendStackArray.map(([tool, url]) => {
                return (
                  <li
                    key={tool}
                    className="w-full flex items-center justify-between border-[1px] border-white/10 shadow-lg rounded my-1"
                  >
                    <div className="stackLogo bg-black/10 dark:bg-white/10 rounded">
                      <img src={url} alt={tool} className="w-16 p-2" />
                    </div>
                    <div className="stackName">
                      <p
                        className={`p-3 text-black dark:text-white/90 uppercase bg-black/10 dark:bg-white/10 mr-1 rounded 
                        ${tool === "css" ? "w-5" : ""}
                        `}
                      >
                        {tool}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="backendSkills lg:w-1/3 bg-black/10 dark:bg-white/10 rounded p-1 shadow-sm shadow-black">
          <div className="skillsContainerTitle flex items-center justify-between border-b-[1px] border-white/10 rounded mb-3">
            <h1 className="p-2 bg-black/10 dark:bg-white/10 uppercase rounded tracking-widest">
              back end
            </h1>
            <span className="p-2 bg-black/10 dark:bg-white/10 rounded text-2xl">
              <MdSettingsEthernet />
            </span>
          </div>
          <div className="skillsContainerContent">
            <ul className="frontendList w-full">
              {backendStackArray.map(([tool, url]) => {
                return (
                  <li
                    key={tool}
                    className="w-full flex items-center justify-between border-[1px] border-white/10 shadow-lg rounded my-1"
                  >
                    <div className="stackLogo bg-black/10 dark:bg-white/10 rounded">
                      <img src={url} alt={tool} className="w-16 p-2" />
                    </div>
                    <div className="stackName">
                      <p className="p-3 text-black dark:text-white/90 uppercase bg-black/10 dark:bg-white/10 mr-1 rounded">
                        {tool}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="tools lg:w-1/3 bg-black/10 dark:bg-white/10 rounded p-1 shadow-sm shadow-black">
          <div className="skillsContainerTitle flex items-center justify-between border-b-[1px] border-white/10 rounded mb-3">
            <h1 className="p-2 bg-black/10 dark:bg-white/10 uppercase rounded tracking-widest">
              tools
            </h1>
            <span className="p-2 bg-black/10 dark:bg-white/10 rounded text-2xl">
              <BsTools />
            </span>
          </div>
          <div className="skillsContainerContent">
            <ul className="frontendList w-full">
              {toolsStackArray.map(([tool, url]) => {
                return (
                  <li
                    key={tool}
                    className="w-full flex items-center justify-between border-[1px] border-white/10 shadow-lg rounded my-1"
                  >
                    <div className="stackLogo bg-black/10 dark:bg-white/10 rounded">
                      <img
                        src={url}
                        alt={tool}
                        className={`w-16 p-2 
                          ${tool === "git" || tool === "figma" ? "h-[3.5rem]" : ""}
                        `}
                      />
                    </div>
                    <div className="stackName">
                      <p className="p-3 text-black dark:text-white/90 uppercase bg-black/10 dark:bg-white/10 mr-1 rounded">
                        {tool === "microsoft_project" ? "microsoft project" : tool}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
