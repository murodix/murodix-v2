import React from 'react';
import PropTypes from 'prop-types';
import styles from './Social.module.scss';
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTwitter,
    FaDiscord,
    FaCircleNotch
} from 'react-icons/fa';

const Social = ({ name, url }) => {

    const getIcon = (name) => {
        const icons = {
            "Github": <FaGithub />,
            "Instagram": <FaInstagram />,
            "Linkedin": <FaLinkedinIn />,
            "Youtube": <FaYoutube />,
            "Twitter": <FaTwitter />,
            "FaDiscord": <FaDiscord />
        }

        console.log(name);

        return icons[name] || <FaCircleNotch />;
    }

    return (
        <div className={styles.social}>
            <a className={styles.social__icon} href={url} target="_blank" rel="noopener noreferrer">
                {getIcon(name)}
            </a>
        </div>
    )
}

Social.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
}

export default Social