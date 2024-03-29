import PropTypes from 'prop-types';

import Carousel from 'react-material-ui-carousel'

import bookShopImage1 from '../assets/project-image/bookShop/bookShop-1.png';
import bookShopImage2 from '../assets/project-image/bookShop/bookShop-2.png';
import bookShopImage3 from '../assets/project-image/bookShop/bookShop-3.png';
import bookShopImage4 from '../assets/project-image/bookShop/bookShop-4.png';
import bookShopImage5 from '../assets/project-image/bookShop/bookShop-5.png';
import bookShopImage6 from '../assets/project-image/bookShop/bookShop-6.png';
import bookShopImage7 from '../assets/project-image/bookShop/bookShop-7.png';
import bookShopImage8 from '../assets/project-image/bookShop/bookShop-8.png';
import bookShopImage9 from '../assets/project-image/bookShop/bookShop-9.png';
import bookShopImage10 from '../assets/project-image/bookShop/bookShop-10.png';
import bookShopImage11 from '../assets/project-image/bookShop/bookShop-11.png';

import mandachiImage1 from '../assets/project-image/mandachiProject/mandachiProject-1.png';
import mandachiImage2 from '../assets/project-image/mandachiProject/mandachiProject-2.png';
import mandachiImage3 from '../assets/project-image/mandachiProject/mandachiProject-3.png';
import mandachiImage4 from '../assets/project-image/mandachiProject/mandachiProject-4.png';
import mandachiImage5 from '../assets/project-image/mandachiProject/mandachiProject-5.png';
import mandachiImage6 from '../assets/project-image/mandachiProject/mandachiProject-6.png';

import currencyImage1 from '../assets/project-image/CurrencyConvert/CurrencyConvertProject-1.png';
import currencyImage2 from '../assets/project-image/CurrencyConvert/CurrencyConvertProject-2.png';

import githubImage1 from '../assets/project-image/GithubSearch/GitHubProject-1.png';
import githubImage2 from '../assets/project-image/GithubSearch/GitHubProject-2.png';

import petcareImage1 from '../assets/project-image/petCare/showcase1.png';
import petcareImage2 from '../assets/project-image/petCare/showcase2.png';
import petcareImage3 from '../assets/project-image/petCare/showcase3.png';
import petcareImage4 from '../assets/project-image/petCare/showcase4.png';
import petcareImage5 from '../assets/project-image/petCare/showcase5.png';

import onlyModelingAgency1 from '../assets/project-image/OnlyModelingAgency/onlyModelingAgency1.png';
import onlyModelingAgency2 from '../assets/project-image/OnlyModelingAgency/onlyModelingAgency2.png';
import onlyModelingAgency3 from '../assets/project-image/OnlyModelingAgency/onlyModelingAgency3.png';
import onlyModelingAgency4 from '../assets/project-image/OnlyModelingAgency/onlyModelingAgency4.png';
import onlyModelingAgency5 from '../assets/project-image/OnlyModelingAgency/onlyModelingAgency5.png';
import onlyModelingAgency6 from '../assets/project-image/OnlyModelingAgency/onlyModelingAgency6.png';
import onlyModelingAgency7 from '../assets/project-image/OnlyModelingAgency/onlyModelingAgency7.png';

import estrelaPneus1 from '../assets/project-image/estrelaPneus/estrelaPneus1.png';
import estrelaPneus2 from '../assets/project-image/estrelaPneus/estrelaPneus2.png';
import estrelaPneus3 from '../assets/project-image/estrelaPneus/estrelaPneus3.png';
import estrelaPneus4 from '../assets/project-image/estrelaPneus/estrelaPneus4.png';
import estrelaPneus5 from '../assets/project-image/estrelaPneus/estrelaPneus5.png';

import { GrFormPrevious, GrFormNext } from 'react-icons/gr';


const imagesPath = {
  ebookshop: [
    bookShopImage1, 
    bookShopImage2,
    bookShopImage3,
    bookShopImage4,
    bookShopImage5,
    bookShopImage6,
    bookShopImage7,
    bookShopImage8,
    bookShopImage9,
    bookShopImage10,
    bookShopImage11
],
  mandachihotel: [
    mandachiImage1,
    mandachiImage2,
    mandachiImage3,
    mandachiImage4,
    mandachiImage5,
    mandachiImage6,
  ],
  currencyconverter: [
    currencyImage1,
    currencyImage2,
  ],
  githubsearch: [
    githubImage1,
    githubImage2,
  ],
  petcare: [
    petcareImage1,
    petcareImage2,
    petcareImage3,
    petcareImage4,
    petcareImage5,
  ],
  onlymodelingagency: [
    onlyModelingAgency1,
    onlyModelingAgency2,
    onlyModelingAgency3,
    onlyModelingAgency4,
    onlyModelingAgency5,
    onlyModelingAgency6,
    onlyModelingAgency7,
  ],
  estrelapneusereboques: [
    estrelaPneus1,
    estrelaPneus2,
    estrelaPneus3,
    estrelaPneus4,
    estrelaPneus5,
  ]
};

export const ImageCarousel = ({ screenWidth, projectName, imageSize }) => {
    console.log(projectName);
    const projectImages = imagesPath[projectName];

    if (!projectImages) {
      return null;
    }

    const imageHeight = () => (screenWidth <= 1280? `40vh` : screenWidth <= 1024? `20vh` : `50vh`);

    return (
        <div className="imageCarousel w-full xl:w-[85%] flex justify-center items-center">
            <Carousel
                className='w-full flex flex-col justify-center items-center'
                NextIcon={<GrFormNext className='bg-gray-400/50 rounded-full' />}
                PrevIcon={<GrFormPrevious className='bg-gray-400/50 rounded-full' />}
            >
                {projectImages.map((item, index) => (
                    <div 
                        className={`imageSlide rounded-lg`}
                        style={{ 
                            width: `${imageSize}%`,
                            height: `${imageHeight()}`,
                            backgroundImage: `url('${item}')`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                        key={index}>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
  
  ImageCarousel.propTypes = {
    screenWidth: PropTypes.number,
    projectName: PropTypes.string.isRequired,
    imageSize: PropTypes.number,
  };