import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RelatedArticleCard.module.scss';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticleImageUrl } from '../utils/imageUtils';
import headerImage from '../assets/img/heder.png';

interface RelatedArticleCardProps {
  article: any;
  className?: string;
}

const RelatedArticleCard: React.FC<RelatedArticleCardProps> = ({ article, className = '' }) => {
  const { language } = useLanguage();
  const langPrefix = language === 'BY' ? '/by' : '';
  const [imageError, setImageError] = React.useState(false);

  return (
    <Link to={`${langPrefix}/article/${article.slug}`} className={`${styles.card} ${className}`}>
      <div className={styles.imageContainer}>
        <img
          src={article.imageUrl && !imageError ? getArticleImageUrl(article.imageUrl) : headerImage}
          alt={article.title}
          className={styles.image}
          onError={() => setImageError(true)}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        {article.createdAt && (
          <div className={styles.date}>
            {new Date(article.createdAt).toLocaleDateString('ru-RU', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </div>
        )}
      </div>
    </Link>
  );
};

export default RelatedArticleCard; 