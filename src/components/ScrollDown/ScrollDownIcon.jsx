import React from 'react';
import styles from './ScrollDownIcon.module.scss';

const ScrollDown = ({ navigateTo }) => {
    return (
        <div className={styles.scrollDown}>
            <a href={"#" + navigateTo} > </a>
        </div>
    )
}

export default ScrollDown