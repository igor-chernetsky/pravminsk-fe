import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../services/strapiService';
import { useLanguage } from '../contexts/LanguageContext';
import { useRunOnceAsync } from '../hooks/useRunOnce';
import documentsBg from '../assets/img/documents.jpg';
import styles from './Documents.module.scss';

const Documents: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const locale = language === 'BY' ? 'be' : 'ru';
  const langPrefix = language === 'BY' ? '/by' : '';

  useRunOnceAsync(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getArticles({ locale, categorySlug: 'dokumenty', pageSize: 3 });
      setArticles(data.data || []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  });

  if (loading) return <div className={styles.loading}>Загрузка документов...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;
  if (!articles.length) return null;

  return (
    <div className={styles.documents} style={{ backgroundImage: `url(${documentsBg})` }}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          {/* First row: Title and Button */}
          <div className={styles.header}>
            <h2 className={styles.title}>ПОСЛЕДНИЕ ДОКУМЕНТЫ</h2>
            <Link to={`${langPrefix}/category/dokumenty`} className={styles.allDocumentsButton}>
              Все Документы
              <span className={styles.arrow}>→</span>
            </Link>
          </div>

          {/* Second row: Description */}
          <div className={styles.description}>
            Уставы, журналы, постановления, обращения и другие материалы, отражающие деятельность и позицию Белорусской Православной Церкви.
          </div>

          {/* Third row: Articles */}
          <div className={styles.articlesList}>
            {articles.map((article) => (
              <div key={article.id} className={styles.articleItem}>
                <h3 className={styles.articleTitle}>
                  {article.title || article.attributes?.title}
                </h3>
                <Link 
                  to={`${langPrefix}/article/${article.slug || article.attributes?.slug}`}
                  className={styles.readMoreLink}
                >
                  Подробнее
                  <span className={styles.arrow}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents; 