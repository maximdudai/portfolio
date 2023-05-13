
import PropTypes from 'prop-types';

import { VscGithubAlt } from 'react-icons/vsc';

export const Github = ({ customLink }) => {
    return <a
        className='text-2xl focus:outline-none'
        href={customLink ? customLink : 'https://github.com/maximdudai'}
        target='_blank'
        rel="noopener noreferrer"
    >
        <VscGithubAlt />
    </a>
}

Github.propType = {
    customLink: PropTypes.string.isRequired
}