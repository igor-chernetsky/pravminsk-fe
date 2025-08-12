import React from 'react';
import RelatedArticleCard from './RelatedArticleCard';
import { useTranslation } from '../contexts/LanguageContext';
import styles from './RelatedArticles.module.scss';

interface RelatedArticlesProps {
  articles: any[];
  className?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles, className = '' }) => {
  const { t } = useTranslation();

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.relatedArticles} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.relatedTitle}>{t('other_articles')}</h3>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.articlesGrid}>
        {articles.map(article => (
          <RelatedArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles; 