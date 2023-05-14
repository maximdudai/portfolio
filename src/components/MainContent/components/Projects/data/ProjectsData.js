import mandachiProject from '../assets/mandachi-project.png';
import bookShop from '../assets/bookShop-project.png';
import githubSearch from '../assets/githubSearch.png';
import currencyConvert from '../assets/moneyConverter.png';

export const personalProjects = [
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
        description: "eBookShop provides users with easy access to a wide selection of books and a user-friendly shopping experience. Users can create an account, browse books, and make purchases using any device. Advanced search filters help users find specific books quickly. The website administrator has full control over user management and site maintenance.",
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