import mandachiProject from '../assets/mandachi-project.png';
import bookShop from '../assets/bookShop-project.png';
import githubSearch from '../assets/githubSearch.png';
import currencyConvert from '../assets/moneyConverter.png';
import petcareProject from '../assets/project-image/petCare/showcase1.png';
import onlyModelingAgency from '../assets/onlyModelingAgency1.png';
import estrelaPneus from '../assets/estrelaPneus.png';


export const personalProjects = [
    {
        imageURL: onlyModelingAgency,
        projectName: "Only Modeling Agency",
        description: "Freelance project: Built a sleek business page for a modeling agency client using React, Tailwind, and i18n for seamless translation.",
        githubURL: null,
        liveVersion: null,
        stack: [
            "React",
            "TailwindCSS",
            "i18next"
        ]
    },
    {
        imageURL: estrelaPneus,
        projectName: "Estrela Pneus e Reboques",
        description: "Freelance project: Developed a dynamic business page for a car service and tire sales client. Utilized Next.js for enhanced performance, Tailwind for efficient design, and SCSS for custom styling.",
        githubURL: null,
        liveVersion: "https://estrela-pneus-web.vercel.app/",
        stack: [
            "NextJS",
            "TailwindCSS",
            "SASS",
        ]
    },
    {
        imageURL: petcareProject,
        projectName: "PetCare",
        description: "Academic Project: Web APP allows users to easily browse and adopt pets from various shelters. Users can browse, and adopt pets from any device. Advanced search filters make finding pets easy.",
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
        liveVersion: null,
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
    },
]