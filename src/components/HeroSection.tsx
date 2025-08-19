import React from 'react';
import { Link } from 'react-router-dom';
import CmsImage from './CmsImage';
import styles from './HeroSection.module.scss';
import headerImage from '../assets/img/heder.png';

interface HeroSectionProps {
  title: string;
  date?: string;
  cover?: any;
  breadcrumbs?: { name: string; slug: string }[];
  currentPageTitle?: string;
  langPrefix?: string;
  showDate?: boolean;
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  date,
  cover,
  breadcrumbs = [],
  currentPageTitle,
  langPrefix = '',
  showDate = true
}) => {
  return (
    <>
      <div className={styles.fullWidthHeader}>
        <div className={`${styles.heroSection} ${cover ? styles.heroCover : ''}`}>
          {cover ? (
            <CmsImage image={cover} variant="category" className={styles.coverImage} height="100%" />
          ) : (
            <img
              src={headerImage}
              alt="Default header image"
              className={`${styles.cmsImage} ${styles.categoryImage} ${styles.coverImage}`}
            />
          )}
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>{title}</h1>
              {showDate && date && (
                <div className={styles.date}>{formatDate(date)}</div>
              )}
            </div>
          </div>
        </div>
        {breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (
              <span key={crumb.slug}>
                <Link to={`${langPrefix}/category/${crumb.slug}`}>{crumb.name}</Link>
                {idx < breadcrumbs.length - 1 && <span className={styles.breadcrumbSep}> / </span>}
              </span>
            ))}
            {currentPageTitle && (
              <>
                <span className={styles.breadcrumbSep}> / </span>
                <span className={styles.breadcrumbCurrent}>{currentPageTitle}</span>
              </>
            )}
          </nav>
        )}
      </div>
    </>
  );
};

export default HeroSection;

