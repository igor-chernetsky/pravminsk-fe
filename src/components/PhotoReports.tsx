import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticlesWithPhotos } from '../services/strapiService';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticleImageUrl } from '../utils/imageUtils';
import { useRunOnceAsync } from '../hooks/useRunOnce';
import styles from './PhotoReports.module.scss';

interface PhotoArticle {
  id: number;
  title: string;
  slug: string;
  imageUrl?: string;
}

const PhotoReports: React.FC = () => {
  const [articles, setArticles] = useState<PhotoArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const locale = language === 'BY' ? 'be' : 'ru';
  const langPrefix = language === 'BY' ? '/by' : '';

  const handleArticleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useRunOnceAsync(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getArticlesWithPhotos({ locale, pageSize: 6 });
      const processedArticles = data.data.map((item: any) => ({
        id: item.id,
        title: item.title || '',
        slug: item.slug || '',
        imageUrl: item.imageUrl || null,
      }));
      setArticles(processedArticles);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  });

  if (loading) return <div className={styles.loading}>Загрузка фоторепортажей...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  return (
    <div className={styles.photoReports}>
      <div className={styles.columnHeader}>
        <h3 className={styles.columnTitle}>Фоторепортажи</h3>
        <Link to={`${langPrefix}/category/fotoreportazhi`} className={styles.viewAllLink}>
          Смотреть все
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
      <div className={styles.columnContent}>
        <div className={styles.photoGrid}>
          {articles.map((article) => {
            const imageUrl = getArticleImageUrl(article.imageUrl);
            
            return (
              <Link 
                key={article.id} 
                to={`${langPrefix}/article/${article.slug}`}
                className={styles.photoItem}
                onClick={handleArticleClick}
              >
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={article.title}
                    className={styles.photoImage}
                  />
                ) : (
                  <div className={styles.photoPlaceholder}>
                    <span>Нет фото</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoReports; 