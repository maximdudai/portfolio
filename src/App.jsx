import { useState } from 'react';
import './App.css'
import MainContent from './components/MainContent/Content';
import Navigation from './components/Navigation/Navigation'

import { Carousel } from '@trendyol-js/react-carousel';


function App() {
    const [showingComponent, setShowingComponent] = useState('AboutMe');

    const handleShowingComponent = (comp) => {
        setShowingComponent(comp);
    };

    return (
        <div className={`personalPortfolio h-screen w-full flex flex-col md:flex-row dark:bg-dark dark:text-gray-200`}>
            <Navigation selectedComponent={handleShowingComponent}/>
            <MainContent showingPage={showingComponent}/>

            {/* <div className="something mt-10">
                <p className='text-gray-200'>something</p>
                <Carousel swiping={true}>
                    <Navigation />
                    <Navigation />
                    <Navigation />
                    <Navigation />
                </Carousel>
            </div> */}
        </div>
    )
}

export default App
