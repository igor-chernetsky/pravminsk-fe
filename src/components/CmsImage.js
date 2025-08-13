import React from 'react';
import styles from './CmsImage.module.scss';
import { getImageUrl } from '../utils/imageUtils';
const CmsImage = ({ image, variant = 'article', className = '', height }) => {
    // Don't render anything if image is not available
    if (!image) {
        return null;
    }
    const getImageClass = () => {
        if (variant === 'category') {
            return `${styles.cmsImage} ${styles.categoryImage} ${className}`;
        }
        else {
            return `${styles.cmsImage} ${styles.articleImage} ${className}`;
        }
    };
    const containerStyle = height ? { height } : {};
    return (<div className={styles.imageContainer} style={containerStyle}>
      <img src={getImageUrl(image, variant)} alt={image.alternativeText || image.name} className={getImageClass()} width={image.width} height={image.height}/>
    </div>);
};
export default CmsImage;
