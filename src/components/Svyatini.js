import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Svyatini.module.scss';
import { useLanguage } from '../contexts/LanguageContext';
import { useRunOnceWithDeps } from '../hooks/useRunOnce';
import { getArticleBySlug } from '../services/strapiService';
import { getArticleImageUrl } from '../utils/imageUtils';
const Svyatini = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { language } = useLanguage();
    const langPrefix = language === 'BY' ? '/by' : '';
    const locale = language === 'BY' ? 'be' : 'ru';
    // Array of article slugs to fetch
    const articleSlugs = [
        "krest-prepodobnoj-evfrosinii-polockoj",
        "minskaja-ikona-bozhiej-materi",
        "svjataja-pravednaja-sofija-knjaginja-sluckaja2"
    ];
    useRunOnceWithDeps(async () => {
        setLoading(true);
        setError(null);
        try {
            // Fetch all articles by their slugs
            const articlePromises = articleSlugs.map(async (slug) => {
                try {
                    const data = await getArticleBySlug({ locale, slug });
                    return data.data || null;
                }
                catch (e) {
                    console.warn(`Failed to fetch article with slug: ${slug}`, e);
                    return null;
                }
            });
            const results = await Promise.all(articlePromises);
            const validArticles = results.filter(article => article !== null);
            setArticles(validArticles);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
    }, [locale]);
    if (loading) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    if (error) {
        return <div className={styles.error}>Ошибка: {error}</div>;
    }
    if (articles.length === 0) {
        return null;
    }
    return (<div className={styles.svyatini}>
      <h3 className={styles.title}>СВЯТЫЕ И СВЯТЫНИ</h3>
      <div className={styles.cardsGrid}>
        {articles.map((article) => (<Link key={article.id} to={`${langPrefix}/article/${article.slug}`} className={styles.card}>
            <div className={styles.imageContainer}>
              {article.imageUrl ? (<img src={getArticleImageUrl(article.imageUrl)} alt={article.title} className={styles.image}/>) : (<div className={styles.placeholderImage}/>)}
            </div>
            <h4 className={styles.articleTitle}>{article.title}</h4>
          </Link>))}
      </div>
    </div>);
};
export default Svyatini;
