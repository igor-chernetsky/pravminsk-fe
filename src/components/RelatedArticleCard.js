import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RelatedArticleCard.module.scss';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticleImageUrl } from '../utils/imageUtils';
const RelatedArticleCard = ({ article, className = '' }) => {
    const { language } = useLanguage();
    const langPrefix = language === 'BY' ? '/by' : '';
    return (<Link to={`${langPrefix}/article/${article.slug}`} className={`${styles.card} ${className}`}>
      <div className={styles.imageContainer}>
        {article.imageUrl ? (<img src={getArticleImageUrl(article.imageUrl)} alt={article.title} className={styles.image}/>) : (<div className={styles.placeholderImage}>
            <span>No Image</span>
          </div>)}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        {article.createdAt && (<div className={styles.date}>
            {new Date(article.createdAt).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            })}
          </div>)}
      </div>
    </Link>);
};
export default RelatedArticleCard;
