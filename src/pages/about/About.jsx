import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.about__wrapper}>
                <div className={styles.about__title}>
                    <h2>About me</h2>
                </div>
                <div className={styles.about__container}>
                    <div className={styles.about__bio}>
                        <p>
                            I'm just a simple tech lover in a complicated Word. Making creative solutions for complicated people.
                            I'm just a simple tech lover in a complicated Word. Making creative solutions for complicated people.
                            I'm just a simple tech lover in a complicated Word. Making creative solutions for complicated people.
                            I'm just a simple tech lover in a complicated Word. Making creative solutions for complicated people.
                        </p>
                    </div>
                    <div className={styles.about__picture}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About