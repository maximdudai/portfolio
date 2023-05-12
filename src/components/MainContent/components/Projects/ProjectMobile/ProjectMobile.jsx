import { useState, Suspense, lazy } from "react";

const ProjectMobile = ({selectedProject}) => {

    const [loadingProject, setLoadingProject] = useState(false);


    useState(() => {

    }, selectedProject);

    return (
        <>
            <div className="selectProjectMobile flex h-full items-center justify-center absolute inset-0 z-20 bg-white dark:bg-dark dark:text-gray-200">
                
            </div>
        </>
    )
};
export default ProjectMobile;