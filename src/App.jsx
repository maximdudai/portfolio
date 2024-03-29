import { useState } from 'react';

import './App.css'
import MainContent from './components/MainContent/Content';
import Navigation from './components/Navigation/Navigation'



function App() {
    const [showingComponent, setShowingComponent] = useState('AboutMe');

    const handleShowingComponent = (comp) => {
        setShowingComponent(comp);
    };

    return (
        <div className={`personalPortfolio min-h-screen w-full flex flex-col lg:flex-row dark:bg-dark dark:text-gray-200`}>
            <Navigation selectedComponent={handleShowingComponent}/>
            <MainContent showingPage={showingComponent}/>
        </div>
    )
}

export default App
