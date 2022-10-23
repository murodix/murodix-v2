import React, { useLayoutEffect, useRef } from 'react'
import styles from './Hero.module.scss';
import { gsap, ScrollTrigger } from 'gsap/all';
import ScrollDown from '../../components/ScrollDown/ScrollDownIcon';

const Hero = () => {

    const heroRef = useRef();
    const timeline = useRef();

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

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
                .from("." + styles.hero__bio, {
                    y: -20,
                    opacity: 0,
                    duration: 1,
                    scale: 0.7
                }, "-=0.2")
                .from("." + styles.hero__scrollIcon, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    scale: 0.7
                })

            gsap.fromTo("." + styles.hero__scrollIcon,
                {
                    opacity: 1
                },
                {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "20% top",
                        end: "bottom center",
                        scrub: 1
                    }
                })
        }, heroRef)

        return () => context.revert();

    }, [])


    return (
        <section ref={heroRef} id="home" className={styles.hero}>
            <div className={styles.hero__wrapper}>
                <div className={styles.hero__container}>
                    <h2 className={styles.hero__name}>Luis Munoz</h2>
                    <h1 className={styles.hero__position}>Software Engineer</h1>
                    <p className={styles.hero__bio}>
                        I'm just a simple tech lover in a complicated World. Making creative solutions for complicated people.
                    </p>
                </div>
                <div className={styles.hero__scrollIcon}>
                    <ScrollDown navigateTo={"about"} />
                </div>

            </div>
        </section>
    )
}

export default Hero