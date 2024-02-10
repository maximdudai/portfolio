import mandachiProject from '../assets/mandachi-project.png';
import bookShop from '../assets/bookShop-project.png';
import githubSearch from '../assets/githubSearch.png';
import currencyConvert from '../assets/moneyConverter.png';
import petcareProject from '../assets/project-image/petCare/showcase1.png';

export const personalProjects = [
    {
        imageURL: petcareProject,
        projectName: "PetCare",
        description: "Web APP allows users to easily browse and adopt pets from various shelters. Users can browse, and adopt pets from any device. Advanced search filters make finding pets easy.",
        githubURL: "https://github.com/maximdudai/pwc_project",
        liveVersion: "https://maximdudai.github.io/pwc_project/",
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "RESTAPI",
        ]
    },
    {
        imageURL: mandachiProject,
        projectName: "Mandachi Hotel",
        description: "The project replicates the Hotel Mandachi website to improve UI/UX skills using front-end technologies.",
        githubURL: "https://github.com/maximdudai/mandachi",
        liveVersion: "https://maximdudai.github.io/mandachi/",
        stack: [
            "HTML",
            "CSS"
        ]
        
    },
    {
        imageURL: bookShop,
        projectName: "eBook Shop",
        description: "eBookShop offers easy access to a wide range of books. Users can create accounts, browse, and buy books from any device. Advanced search filters make finding books easy, and the admin has full control over the site.",
        githubURL: "https://github.com/maximdudai/eBooks-Shop",
        liveVersion: "",
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "PHP",
            "MySQL"
        ]
    },
    {
        imageURL: currencyConvert,
        projectName: "Currency Converter",
        description: "Exchange currency using exchange rates from the CoinMarketCap and CurrencyLayer APIs",
        githubURL: "https://github.com/maximdudai/currency-convert",
        liveVersion: "https://maxdev-currency.netlify.app/",
        stack: [
            "React",
            "TailwindCSS",
            "RESTAPI",
            "AXIOS"
        ]
    },
    {
        imageURL: githubSearch,
        projectName: "Github Search",
        description: "The project leverages the power of the GitHub API to provide users with an easy and efficient way to view GitHub profile information without having to navigate to the GitHub website.",
        githubURL: "https://github.com/maximdudai/React/tree/main/github-search",
        liveVersion: "https://maxdev-gitsrch.netlify.app/",
        stack: [
            "React",
            "TailwindCSS",
            "RESTAPI",
            "AXIOS"
        ]
    }
]