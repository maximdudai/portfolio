import PropTypes from 'prop-types'

import { personalProjects } from '../data/ProjectsData';

export const ProjectTitle = ({ selectedProject }) => {
    return (
        <>
            <div className="projectTitle w-full md:w-1/2 uppercase bg-dark/25 dark:bg-white/5 text-center p-2 rounded my-4">
                <h3 className='tracking-widest'>{personalProjects[selectedProject].projectName}</h3>
            </div>
        </>
    )
};

ProjectTitle.propTypes = {
    selectedProject: PropTypes.number
};