import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Socials.module.scss';
import Social from '../Social/Social';
import { gsap } from 'gsap/all';

const Socials = ({ socials }) => {

    const socialsRef = useRef();
    const timeline = useRef();

    useEffect(() => {
        let context = gsap.context(() => {
            console.log(styles.socials__container);
            timeline.current = gsap.timeline()
                .from("." + styles.socials__container, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    scale: 0.9
                }, "+=1")
        }, socialsRef)

        return () => context.revert();

    }, [])


    return (
        <div ref={socialsRef} className={styles.socials}>
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