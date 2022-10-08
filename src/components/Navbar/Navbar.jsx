import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';

const Navbar = ({ links }) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <a href="#home" className={styles.navbar__logo}>
                    <svg width="170" height="144" viewBox="0 0 170 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M163.319 72V12.6099L84.8795 72L45.6597 101.695M163.319 72V131.39L124.099 101.695M163.319 72L124.099 101.695M45.6597 101.695L6.43982 131.39V12.6099L45.6597 42.305L55.4646 49.7287M45.6597 101.695L84.8795 131.39L124.099 101.695" stroke="#FFFFFF" strokeWidth="12.2772" />
                    </svg>
                </a>
                <div className={styles.navbar__links}>

                    {links?.map((link, index) => {
                        return (
                            <a key={link.desc + index} className={styles.navbar__link} href={link?.ref}>{link?.desc}</a>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

Navbar.propTypes = {
    links: PropTypes.array
}

Navbar.defaultProps = {
    links: []
}

export default Navbar