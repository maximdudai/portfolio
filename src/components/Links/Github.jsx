
import PropTypes from 'prop-types';

import { VscGithubAlt } from 'react-icons/vsc';

export const Github = ({customLink}) => {
    return <a
        className='text-2xl focus:outline-none'
        href={customLink ? customLink : 'https://github.com/maximdudai'}
        target='noopener _blank'
    >
        <VscGithubAlt />
    </a>
}

Github.propType = {
    customLink: PropTypes.string
}