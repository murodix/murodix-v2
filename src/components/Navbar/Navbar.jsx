import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = ({ links }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedLink, setSelectedLink] = useState(null);

    const selectLink = (link) => {
        setSelectedLink(link);
        setIsExpanded(false);
    }


    return (
        <header className={`${styles.navbar} ${isExpanded ? styles['navbar-expand'] : ""}`}>
            <nav className={styles.navbar__container}>
                <div className={styles.navbar__logo__container}>
                    <a href="#home" className={`${styles.navbar__logo} ${selectedLink === "#home" ? styles['navbar__logo-active'] : ""}`}
                        onClick={() => selectLink("#home")}>
                        <svg width="170" height="144" viewBox="0 0 170 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M163.319 72V12.6099L84.8795 72L45.6597 101.695M163.319 72V131.39L124.099 101.695M163.319 72L124.099 101.695M45.6597 101.695L6.43982 131.39V12.6099L45.6597 42.305L55.4646 49.7287M45.6597 101.695L84.8795 131.39L124.099 101.695" stroke="#FFFFFF" strokeWidth="12.2772" />
                        </svg>
                    </a>
                </div>

                <div className={`${styles.navbar__links} ${isExpanded ? styles['navbar__links-expand'] : ""}`}>
                    {links?.map((link, index) => {
                        return (
                            <a key={link.desc + index}
                                className={`${styles.navbar__link} ${selectedLink === link.ref ? styles['navbar__link-active'] : ""}`}
                                href={link?.ref}
                                onClick={() => selectLink(link?.ref)}>
                                {link?.desc}
                            </a>
                        )
                    })}
                </div>

                <div className={styles.navbar__icons} onClick={() => { setIsExpanded(!isExpanded) }}>
                    {isExpanded ? <MdClose /> : <MdMenu />}
                </div>
            </nav>
        </header >
    )
}

Navbar.propTypes = {
    links: PropTypes.array.isRequired
}

Navbar.defaultProps = {
    links: []
}

export default Navbar