import React, { useState, useEffect } from 'react';
import styles from './HighslideImage.module.scss';

interface HighslideImageProps {
  src: string;
  alt?: string;
  className?: string;
  href?: string;
}

const HighslideImage: React.FC<HighslideImageProps> = ({ src, alt, className, href }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use href as fallback for src if src is not provided
  const imageSrc = src || href || '';
  const fullImgSrc = href || src || '';

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <a 
        href={fullImgSrc} 
        className={`${styles.highslideLink} ${className || ''}`}
        onClick={handleImageClick}
      >
        <img src={imageSrc} alt={alt || ''} className={styles.highslideImage} />
      </a>
      
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleModalClick}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <img 
              src={fullImgSrc} 
              alt={alt || ''} 
              className={styles.modalImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HighslideImage; 