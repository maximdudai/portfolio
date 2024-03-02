import PropTypes from 'prop-types';

import { stackLogo } from './StackData';

export const AppStack = ({stack}) => {

    console.log(stack);

    const logoSrc = stackLogo[stack] || null;

    return (
        <>
            <div className="appStackIcon">
                {logoSrc && <img 
                    className='w-[32px] md:w-[16px]'
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