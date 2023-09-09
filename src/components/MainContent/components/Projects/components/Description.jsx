import PropTypes from 'prop-types';


import { personalProjects } from '../data/ProjectsData';

export const Description = ({ selectedProject }) => {
    return (
        <>
            <div className="projectDataDescriptionContainer min-h-content bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4">
                <div className="selectorProjectDescriptionTitle text-center bg-dark/25 dark:bg-white/5 py-2 rounded border-2 border-gray-600/50">
                    <h3 className={`text-md md:text-sm tracking-widest`}>Description</h3>
                </div>
                <p className='py-2 text-left text-md md:text-sm'>{personalProjects[selectedProject].description}</p>
            </div>
        </>
    )
};
Description.propTypes = { 
    selectedProject: PropTypes.number
};