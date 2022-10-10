import React, { useLayoutEffect, useRef } from 'react'
import styles from './Hero.module.scss';
import { gsap, ScrollTrigger } from 'gsap/all';

const Hero = () => {

    const heroRef = useRef();
    const timeline = useRef();

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        let context = gsap.context(() => {
            timeline.current = gsap.timeline()
                .from("." + styles.hero__name, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    scale: 0.9
                })
                .from("." + styles.hero__position, {
                    y: 20,
                    opacity: 0,
                    duration: .5,
                    scale: 0.9
                }, "-=0.5")
        }, heroRef)

        return () => context.revert();

    }, [])


    return (
        <section ref={heroRef} id="home" className={styles.hero}>
            <div className={styles.hero__container}>
                <h2 className={styles.hero__name}>Luis Munoz</h2>
                <h1 className={styles.hero__position}>Software Engineer</h1>
            </div>
        </section>
    )
}

export default Hero