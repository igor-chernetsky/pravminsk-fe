import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../services/strapiService';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticleImageUrl } from '../utils/imageUtils';
import { useRunOnceAsync } from '../hooks/useRunOnce';
import styles from './MainNews.module.scss';

const MainNews: React.FC = () => {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const locale = language === 'BY' ? 'be' : 'ru';
  const langPrefix = language === 'BY' ? '/by' : '';

  useRunOnceAsync(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getArticles({ locale, categorySlug: 'glavnaya-novost', pageSize: 1 });
      const articles = data.data || [];
      setArticle(articles.length > 0 ? articles[0] : null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  });

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  if (loading) return <div className={styles.loading}>Загрузка главной новости...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;
  if (!article) return null;

  return (
    <div className={styles.mainNews}>
      <Link 
        to={`${langPrefix}/article/${article.slug || article.attributes?.slug}`}
        className={styles.articleLink}
      >
        <div className={styles.imageContainer}>
          {article.imageUrl ? (
            <img
              src={getArticleImageUrl(article.imageUrl)}
              alt={article.title || article.attributes?.title}
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholderImage}>
              <span>Нет изображения</span>
            </div>
          )}
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>
            {article.title || article.attributes?.title}
          </h2>
          
          <div className={styles.date}>
            {formatDate(article.publishedAt || article.attributes?.publishedAt)}
          </div>
          
          <div className={styles.description}>
            {article.description || article.attributes?.description}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainNews; 