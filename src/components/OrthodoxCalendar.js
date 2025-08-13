import React, { useEffect, useRef } from 'react';
import styles from './OrthodoxCalendar.module.scss';
const OrthodoxCalendar = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const copyCalendarContent = () => {
            const hiddenDiv = document.getElementById('orthodox-calendar-hidden');
            const container = containerRef.current;
            if (hiddenDiv && container) {
                // Wait a bit for the script to load and inject content
                setTimeout(() => {
                    // Clone the content from the hidden div (excluding the script tag)
                    const contentToCopy = Array.from(hiddenDiv.children).filter(child => child.tagName !== 'SCRIPT');
                    // Clear the container and add the copied content
                    container.innerHTML = '';
                    contentToCopy.forEach(child => {
                        container.appendChild(child.cloneNode(true));
                    });
                }, 2000); // Wait 2 seconds for the script to load
            }
        };
        // Copy content after component mounts
        copyCalendarContent();
        // Also try copying after a longer delay in case the script takes time
        const timer = setTimeout(copyCalendarContent, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (<div className={styles.orthodoxCalendar}>
      <h3 className={styles.title}>Календарь</h3>
      <div ref={containerRef} className={styles.calendarContainer}/>
    </div>);
};
export default OrthodoxCalendar;
