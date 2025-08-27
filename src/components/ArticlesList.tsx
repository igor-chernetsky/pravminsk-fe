import React, { useState, useEffect, useRef } from 'react';
import ArticleBlock from './ArticleBlock';
import type { Article } from '../types/Article';
import styles from './ArticlesList.module.scss';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import { getArticles } from '../services/strapiService';

interface ArticlesListProps {
  categorySlug?: string;
  search?: string;
  date?: string;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ categorySlug, search, date }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { language } = useLanguage();
  const locale = language === 'BY' ? 'be' : 'ru';
  const { t } = useTranslation();
  const hasLoaded = useRef(false);
  const isInitialMount = useRef(true);
  const prevProps = useRef({ categorySlug, search, date });

  const loadArticles = async (page: number, append: boolean = false) => {
    try {
      const data = await getArticles({ locale, categorySlug, search, date, page });
      const newArticles = data.data.map((item: any) => ({
        id: item.id,
        title: item.title || item.attributes?.title,
        slug: item.slug || item.attributes?.slug,
        description: item.description || item.attributes?.description,
        imageUrl: item.imageUrl || item.attributes?.imageUrl,
        publishedAt: item.publishedAt || item.attributes?.publishedAt || item.createdAt || item.attributes?.createdAt,
      }));

      if (append) {
        setArticles(prev => [...prev, ...newArticles]);
      } else {
        setArticles(newArticles);
      }

      // Check if there are more articles
      const totalPages = data.meta?.pagination?.pageCount || 1;
      setHasMore(page < totalPages);
    } catch (e: any) {
      setError(e.message);
    }
  };

  // Effect for initial load - prevent double execution
  useEffect(() => {
    if (hasLoaded.current) return; // Prevent double execution
    hasLoaded.current = true;
    
    setLoading(true);
    setError(null);
    setCurrentPage(1);
    setHasMore(true);
    loadArticles(1, false).finally(() => setLoading(false));
  }, []); // Empty dependency array - run only once on mount

  // Effect for prop changes - re-fetch when props change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevProps.current = { categorySlug, search, date };
      return; // Skip on initial mount
    }
    
    // Check if props actually changed
    const currentProps = { categorySlug, search, date };
    const propsChanged = 
      prevProps.current.categorySlug !== currentProps.categorySlug ||
      prevProps.current.search !== currentProps.search ||
      prevProps.current.date !== currentProps.date;
    
    if (!propsChanged) return;
    
    prevProps.current = currentProps;
    setLoading(true);
    setError(null);
    setCurrentPage(1);
    setHasMore(true);
    loadArticles(1, false).finally(() => setLoading(false));
  }, [categorySlug, search, date]); // Re-run when these props change

  const handleLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    const nextPage = currentPage + 1;
    await loadArticles(nextPage, true);
    setCurrentPage(nextPage);
    setLoadingMore(false);
  };

  if (loading) return <div className={styles.loading}>{t('loading_articles')}</div>;
  if (error) return <div className={styles.error}>{t('error') + ': ' + error}</div>;
  if (!articles.length) return <div className={styles.empty}>{t('no_articles')}</div>;
  
  return (
    <div className={styles.articlesList}>
      {articles.map(article => <ArticleBlock key={article.id} article={article} />)}
      {hasMore && (
        <div className={styles.loadMoreContainer}>
          <button 
            className={styles.loadMoreButton}
            onClick={handleLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? t('loading_articles') : t('load_more')}
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticlesList; 