import React from 'react';
import ArticlesList from './ArticlesList';
import { useCategories } from '../contexts/CategoryContext';
import { useTranslation } from '../contexts/LanguageContext';
import styles from './FirstCategoryArticles.module.scss';

const FirstCategoryArticles: React.FC = () => {
  const { categories, loading, error } = useCategories();
  const { t } = useTranslation();

  if (loading) return <div className={styles.loading}>{t('loading_articles')}</div>;
  if (error) return <div className={styles.error}>{t('error') + ': ' + error}</div>;
  if (!categories || !categories[0]?.child?.length) return <div className={styles.empty}>{t('no_categories')}</div>;

  const firstCategory = categories[0]?.child?.[0];

  return (
    <div className={styles.firstCategoryArticles}>
      <ArticlesList categorySlug={firstCategory.slug} />
    </div>
  );
};

export default FirstCategoryArticles; 