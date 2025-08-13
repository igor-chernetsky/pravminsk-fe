import React, { useState, useEffect } from 'react';
import CmsImage from './CmsImage';
import styles from './CarouselPanel.module.scss';
const CarouselPanel = ({ panels }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // Auto-advance slides every 5 seconds
    useEffect(() => {
        if (panels.length <= 1)
            return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % panels.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [panels.length]);
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % panels.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + panels.length) % panels.length);
    };
    if (!panels || panels.length === 0) {
        return null;
    }
    return (<div className={styles.carouselContainer}>
      {panels.map((panel, index) => (<div key={panel.id} className={`${styles.carouselSlide} ${index === currentSlide ? styles.active : ''}`} onClick={() => panel.link && window.open(panel.link, '_blank')} style={{ cursor: panel.link ? 'pointer' : 'default' }}>
          <CmsImage image={panel.image} variant="category" className={styles.slideImage}/>
          <div className={styles.slideContent}>
            <h2 className={styles.slideTitle}>{panel.title}</h2>
            <p className={styles.slideDescription}>{panel.description}</p>
          </div>
        </div>))}
      
      {panels.length > 1 && (<>
          <div className={styles.carouselControls}>
            {panels.map((_, index) => (<button key={index} className={`${styles.controlButton} ${index === currentSlide ? styles.active : ''}`} onClick={() => goToSlide(index)} aria-label={`Go to slide ${index + 1}`}/>))}
          </div>
          
          <div className={styles.carouselArrows}>
            <button className={styles.arrowButton} onClick={prevSlide} aria-label="Previous slide">
              ‹
            </button>
            <button className={styles.arrowButton} onClick={nextSlide} aria-label="Next slide">
              ›
            </button>
          </div>
        </>)}
    </div>);
};
export default CarouselPanel;
