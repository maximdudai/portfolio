import PropTypes from 'prop-types';

import { personalProjects } from '../data/ProjectsData';

import { AppStack } from '../stack/AppStack';

export const Stack = ({ selectedProject }) => {
    return (
        <>
            <div className={`selectedProjectStack w-full h-auto flex flex-col bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4`}>
                <div className="selectedProjectStackTitle w-full text-center bg-dark/25 dark:bg-white/5 py-2 rounded border-2 border-gray-600/50">
                    <h3 className={`text-md md:text-sm tracking-widest`}>Stack</h3>
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
        </>
    )
};

Stack.propTypes = {
    selectedProject: PropTypes.number
};