import { frontendStack, backendStack } from "../Projects/stack/StackData";
const frontendStackArray = Object.entries(frontendStack);
const backendStackArray = Object.entries(backendStack);

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Skills = () => {
  return (
    <>
      <div className="portfolioSkills w-full lg:flex lg:flex-row gap-2">
        <div className="frontendSkills  lg:w-1/3 bg-white/10 rounded p-1 shadow-sm shadow-black">
          
        </div>

        <div className="backendSkills  lg:w-1/3 bg-white/10 rounded p-1 shadow-sm shadow-black">
          
        </div>
        
        <div className="tools  lg:w-1/3 bg-white/10 rounded p-1 shadow-sm shadow-black">
          
        </div>
      </div>
    </>
  );
};
export default Skills;
