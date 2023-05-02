import './App.css'
import Navigation from './components/Navigation/Navigation'

import { Carousel } from '@trendyol-js/react-carousel';


function App() {


    return (
        <div className={`personalPortfolio h-screen w-full flex flex-col dark:bg-dark dark:text-gray-200`}>
            <Navigation />

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
