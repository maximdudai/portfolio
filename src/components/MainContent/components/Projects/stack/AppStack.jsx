import PropTypes from 'prop-types';

import bootstrapLogo from './images/bootstrap.png';
import cssLogo from './images/css-3.png';
import htmlLogo from './images/html.png';
import jsLogo from './images/js.png';
import reactLogo from './images/react.png';
import sassLogo from './images/sass.png';
import tailwindLogo from './images/tailwindcss.png';
import viteLogo from './images/vitejs.png';
import phpLogo from './images/php.png';
import mysqlLogo from './images/mysql.png';
import axiosLogo from './images/axios.png';
import restapiLogo from './images/restapi.png';

const logoMap = {
    bootstrap: bootstrapLogo,
    css: cssLogo,
    html: htmlLogo,
    js: jsLogo,
    react: reactLogo,
    sass: sassLogo,
    tailwindcss: tailwindLogo,
    vitejs: viteLogo,
    php: phpLogo,
    mysql: mysqlLogo,
    axios: axiosLogo,
    restapi: restapiLogo
};

const AppStack = ({stack}) => {
    const logoSrc = logoMap[stack] || null;

    return (
        <>
            <div className="appStackIcon">
                {logoSrc && <img 
                    className='w-[32px]'
                    src={logoSrc} 
                    alt={stack} 
                />}
            </div>
        </>
    )
};
AppStack.propTypes = {
    stack: PropTypes.string
}
export default AppStack;