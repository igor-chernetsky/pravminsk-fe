import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../services/strapiService';
import { useLanguage } from '../contexts/LanguageContext';
import { useRunOnceAsync } from '../hooks/useRunOnce';
import styles from './Announcements.module.scss';
const Announcements = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { language } = useLanguage();
    const locale = language === 'BY' ? 'be' : 'ru';
    const langPrefix = language === 'BY' ? '/by' : '';
    useRunOnceAsync(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getArticles({ locale, categorySlug: 'anonsy', pageSize: 3 });
            setArticles(data.data || []);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
    });
    if (loading)
        return <div className={styles.loading}>Загрузка анонсов...</div>;
    if (error)
        return <div className={styles.error}>Ошибка: {error}</div>;
    if (!articles.length)
        return null;
    return (<div className={styles.announcements}>
      <div className={styles.header}>
        <h2 className={styles.title}>Анонсы</h2>
        <div className={styles.divider}></div>
      </div>
      
      <div className={styles.articlesList}>
        {articles.map((article) => (<div key={article.id} className={styles.articleItem}>
            <h3 className={styles.articleTitle}>
              {article.title || article.attributes?.title}
            </h3>
            <Link to={`${langPrefix}/article/${article.slug || article.attributes?.slug}`} className={styles.readMoreLink}>
              Подробнее
              <span className={styles.arrow}>→</span>
            </Link>
          </div>))}
      </div>
    </div>);
};
export default Announcements;
