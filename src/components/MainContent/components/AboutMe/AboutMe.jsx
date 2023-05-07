const AboutMe = () => {

    const elementBorder = 'border-l-[1px] border-orange-400 p-2 px-5';
    const backgroundElementStyle = 'bg-dark/5 dark:bg-white/5 p-3 rounded-lg';

    return (
        <>
            <div className="personalPortfolioAboutMe h-auto md:w-1/2">
                <div className="aboutMeComponentContainer">

                    <div className={`aboutMeComponentTitle ${backgroundElementStyle}`}>
                        <h1 className={`text-lg ${elementBorder} md:text-2xl border-l-[1px] border-orange-400 tracking-widest`}>{'<>Who I am ?</>'}</h1>
                    </div>
                    <div className={`boutMeComponentDescription ${backgroundElementStyle} mt-5`}>
                        <p className={`text-sm ${elementBorder}`}>
                            Hi, I&#39;m Maxim, a dedicated and detail-oriented Front-End Web Developer with a passion for creating user-friendly and visually appealing web solutions. 
                            I am constantly looking to enhance my skills and knowledge to keep pace with the latest trends and best practices in the industry.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};
export default AboutMe;