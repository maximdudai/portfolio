import { useEffect, useState } from "react";

import { stackLogo } from "../Projects/stack/StackData";
const stackLogoArray = Object.entries(stackLogo);
import { AiOutlineUnorderedList } from "react-icons/ai";
import { SoftSkills } from "../AboutMe/SoftSkills";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Skills = () => {
  const [skillset, setVisibleSkillset] = useState(true);
  const [softSkills, setVisibleSoftSkills] = useState(true);

  const toggleSkillset = () => {
    setVisibleSkillset(!skillset);
  };

  const toggleSoftSkills = () => {
    setVisibleSoftSkills(!softSkills);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setVisibleSkillset(false);
        setVisibleSoftSkills(false);
      } else {
        setVisibleSkillset(true);
        setVisibleSoftSkills(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="portoflioSkills w-full min-h-screen flex flex-col lg:justify-evenly gap-2">
        <div className="portfolioSkillset w-full xl:h-96 flex flex-col justify-center items-center xl:w-1/3 p-3 bg-black/20 dark:bg-white/10 rounded">
          <div className="portoflioSkillsTitle w-[95%] flex justify-between items-center bg-dark/25 dark:bg-white/5 p-2 my-4 border-2 border-gray-400/10 rounded-md">
            <h3 className="text-gray-200">Skillset</h3>
            <button onClick={toggleSkillset} className="inline lg:hidden">
              <AiOutlineUnorderedList />
            </button>
          </div>
          <ul className="w-full h-auto flex flex-wrap justify-center">
            {skillset === true &&
              stackLogoArray.map(([stack, logo]) => {
                return (
                  <li
                    // Conditionally add the "title" attribute based on the "shouldAddTitle" prop
                    {...(stack === "typescript"
                      ? { title: "Learning..." }
                      : {})}
                    className="skillListItem w-20 flex flex-col justify-between items-center rounded-md p-2 gap-2 m-2 bg-black/25 dark:bg-black/50"
                    key={stack}
                  >
                    <div className="techLogo bg-white/25 dark:bg-white/10 p-2 rounded">
                      {stack === "typescript" ? (
                        <>
                          <AiOutlineLoading3Quarters className="absolute z-10 animate-spin m-0.5" />
                          <img
                            className="w-5 opacity-10"
                            src={logo}
                            alt={stack}
                          />
                        </>
                      ) : (
                        <img className="w-5" src={logo} alt={stack} />
                      )}
                    </div>
                    <div className="techName">
                      <p className="text-[12px] text-gray-200">
                        {stack.toLocaleUpperCase()}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="portfolioSoftSkillset flex flex-col items-center h-auto xl:h-96 xl:w-1/3 p-6 bg-black/20 dark:bg-white/10 rounded mt-5 xl:mt-0">
          <div className="portoflioSkillsTitle w-full flex justify-between items-center bg-dark/25 dark:bg-white/5 p-2 my-4 border-2 border-gray-400/10 rounded-md">
            <h3 className="text-gray-200">Soft Skills</h3>
            <button onClick={toggleSoftSkills} className="inline lg:hidden">
              <AiOutlineUnorderedList />
            </button>
          </div>
          <ul className="w-full gap-2 flex flex-col md:flex-wrap xl:inline">
            {softSkills === true &&
              SoftSkills.map((skill, index) => (
                <li
                  className="rounded text-gray-200 p-2 gap-2 my-1 bg-black/25 dark:bg-black/50 text-sm lg:text-md"
                  key={index}
                >
                  &gt; {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Skills;
