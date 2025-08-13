import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.scss';
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    if (!visible)
        return null;
    return (<button className={styles.scrollToTopButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      ↑
    </button>);
};
export default ScrollToTop;
