import PropTypes from 'prop-types';

import { AiOutlineClose } from 'react-icons/ai';
import { personalProjects } from '../data/ProjectsData';
import { ImageCarousel } from '../ImageCarousel/ImageCarousel';

import { ProjectTitle } from '../components/Title';
import { Description } from '../components/Description';
import { Stack } from '../components/Stack';
import { Sources } from '../components/Sources';

const ProjectMobile = ({screenWidth, selectedProject, onModalClose}) => {

    return (
        <>
            <div className="selectProjectMobile fixed overflow-y-auto flex items-center flex-col z-20 inset-0 p-2 bg-white dark:bg-dark dark:text-gray-200">

                <div className="mobileSelectedProjectCloseMenu w-full text-center">
                    <button
                        className='p-2 bg-dark/25 dark:bg-white/5 rounded-full border-2 border-gray-600/50'
                        onClick={onModalClose}
                    >
                        <AiOutlineClose />
                    </button>
                </div>

                <ProjectTitle selectedProject={selectedProject} />

                <div className="mobileSelectedProjectImage w-full lg:w-1/2">
                    <ImageCarousel screenWidth={screenWidth} projectName={personalProjects[selectedProject]?.projectName.split(' ').join('').toLowerCase()} imageSize={100} />
                </div>
                
                <Description selectedProject={selectedProject} />
                <Stack selectedProject={selectedProject} />
                <Sources selectedProject={selectedProject} />
            </div>
        </>
    )
};
export default ProjectMobile;

ProjectMobile.propTypes = {
    screenWidth: PropTypes.number,
    selectedProject: PropTypes.number,
    onModalClose: PropTypes.func.isRequired
};