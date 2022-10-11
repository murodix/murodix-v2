import React, { useLayoutEffect, useRef } from 'react'
import styles from './Hero.module.scss';
import { gsap, CustomEase } from 'gsap/all';

const Hero = () => {

    const heroRef = useRef();
    const timeline = useRef();

    useLayoutEffect(() => {
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
                .from("." + styles.hero__bio, {
                    y: -20,
                    opacity: 0,
                    duration: 1,
                    scale: 0.7
                }, "-=0.2")


            gsap.to("." + styles.hero__square, {
                scale: 1.1,
                ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.342,0.852,0.5,1,0.692,1.18,0.818,0.001,1,0"),
                repeat: -1,
                duration: 5
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
                        I'm just a simple tech lover in a complicated Word. Making creative solutions for complicated people.
                    </p>
                    <div className={`${styles.hero__square} ${styles["hero__square-left"]}`} />
                    <div className={`${styles.hero__square} ${styles["hero__square-right"]}`} />
                </div>
            </div>
        </section>
    )
}

export default Hero