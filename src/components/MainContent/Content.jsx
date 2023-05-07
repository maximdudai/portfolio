
import { Suspense, lazy } from 'react'

const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Resume = lazy(() => import('./components/Resume/Resume'));
const Skills = lazy(() => import('./components/Skills/Skills'));

const MainContent = ({ showingPage }) => {
    return (
        <>
            <div className="portfolioContainer p-5 py-10 w-full h-auto text-gray-900 dark:text-gray-200">
                <Suspense fallback={<div>Loading...</div>}>
                    { showingPage === 'AboutMe' && <AboutMe /> }
                    { showingPage === 'Projects' && <Projects /> }
                    { showingPage === 'Resume' && <Resume /> }
                    { showingPage === 'Skills' && <Skills /> }
                </Suspense>
            </div>
        </>
    )
};
export default MainContent;