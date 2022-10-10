import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import { MdMenu, MdClose } from "react-icons/md";
import { gsap } from 'gsap';

const Navbar = ({ links }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedLink, setSelectedLink] = useState("#home");
    const navbarRef = useRef();
    const timeline = useRef();

    const selectLink = (link) => {
        setSelectedLink(link);
        setIsExpanded(false);
    }



    useLayoutEffect(() => {
        let context = gsap.context(() => {
            timeline.current = gsap.timeline()
                .from("." + styles.navbar__links, {
                    x: 20,
                    opacity: 0,
                    duration: .5
                }, "+=.5")
        }, navbarRef)

        return () => context.revert();

    }, [links])



    return (
        <header ref={navbarRef} className={`${styles.navbar} ${isExpanded ? styles['navbar-expand'] : ""}`}>
            <nav className={styles.navbar__container}>
                <div className={styles.navbar__logo__container}>
                    <a href="#home" className={`${styles.navbar__logo} ${selectedLink === "#home" ? styles['navbar__logo-active'] : ""}`}
                        onClick={() => selectLink("#home")}>
                        <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.1983 2.71255L63.0456 17.6355C64.0965 18.2423 64.7439 19.3636 64.7439 20.577V50.423C64.7439 51.6364 64.0965 52.7577 63.0456 53.3645L37.1983 68.2874C36.1474 68.8942 34.8526 68.8942 33.8017 68.2875L7.95437 53.3645C6.90348 52.7577 6.2561 51.6364 6.2561 50.423V20.577C6.2561 19.3636 6.90348 18.2423 7.95437 17.6355L33.8017 2.71255C34.8526 2.10582 36.1474 2.10582 37.1983 2.71255Z" stroke="#F3F5F7" strokeWidth="3" />
                            <path d="M48.9655 35.6574V25.462L35.5 35.6574L28.7672 40.755M48.9655 35.6574V45.8527L42.2328 40.755M48.9655 35.6574L42.2328 40.755M28.7672 40.755L22.0345 45.8527V25.462L28.7672 30.5597L30.4504 31.8341M28.7672 40.755L35.5 45.8527L42.2328 40.755" stroke="#F3F5F7" strokeWidth="3" />
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