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

import { GrFormPrevious, GrFormNext } from 'react-icons/gr';


const imagesPath = {
  bookShop: [
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
  mandachi: [
    mandachiImage1,
    mandachiImage2,
    mandachiImage3,
    mandachiImage4,
    mandachiImage5,
    mandachiImage6,
  ],
};

export const ImageCarousel = ({ projectName, imageSize }) => {
    const projectImages = imagesPath[projectName];
  
    if (!projectImages) {
      return null;
    }

    return (
        <div className="imageCarousel">
            <Carousel
                className='flex flex-col justify-center'
                NextIcon={<GrFormNext className='bg-gray-400/50 rounded-full' />}
                PrevIcon={<GrFormPrevious className='bg-gray-400/50 rounded-full' />}
            >
                {projectImages.map((item, index) => (
                    <div 
                        className={`imageSlide`}
                        style={{ 
                            width: `${imageSize}%`,
                            height: `50vh`,
                            background: `url('${item}')`,
                            backgroundSize: 'cover',
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
    projectName: PropTypes.string.isRequired,
    imageSize: PropTypes.string.isRequired,
  };