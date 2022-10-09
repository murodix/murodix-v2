import React from 'react';
import PropTypes from 'prop-types';
import styles from './Socials.module.scss';
import Social from '../Social/Social';

const Socials = ({ socials }) => {
    return (
        <div className={styles.socials}>
            <div className={styles.socials__container}>
                {socials?.map((social, index) => {
                    return (<Social key={index} name={social?.name} url={social?.url} />)
                })}
            </div>
        </div>
    )
}

Socials.propTypes = {
    socials: PropTypes.array
}

Socials.defaultValues = {
    socials: []
}

export default Socials