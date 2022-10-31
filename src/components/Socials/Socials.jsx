import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Socials.module.scss';
import Social from '../Social/Social';
import { gsap, CSSRulePlugin } from 'gsap/all';

const Socials = ({ socials }) => {

    const socialsRef = useRef();
    const timeline = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(CSSRulePlugin);

        let context = gsap.context(() => {
            let socialBeforeSelector = CSSRulePlugin.getRule("." + styles.socials + ":before");
            timeline.current = gsap.timeline()
                .to(socialBeforeSelector, {
                    opacity: 0.5,
                    duration: 2,
                    scale: 1,
                })
                .from("." + styles.socials__social, {
                    x: 20,
                    opacity: 0,
                    duration: .5,
                    scale: 0.5,
                    stagger: .2
                }, "-=1")
        }, socialsRef)

        return () => context.revert();

    }, [socials])


    return (
        <div ref={socialsRef} className={styles.socials}>
            <div className={styles.socials__container}>
                {socials?.map((social, index) => {
                    return (<div key={index} className={styles.socials__social}> <Social name={social?.name} url={social?.url} /></div>)
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