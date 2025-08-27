import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ArticleBlock from '../components/ArticleBlock';
import type { Article } from '../types/Article';
import styles from './PhotoGallery.module.scss';
import { getArticlesWithPhotos } from '../services/strapiService';

const PhotoGallery: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { language } = useLanguage();
  const locale = language === 'BY' ? 'be' : 'ru';
  const hasLoaded = useRef(false);

  const loadArticles = async (page: number, append: boolean = false) => {
    try {
      const data = await getArticlesWithPhotos({ locale, page, pageSize: 12 });
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

  // Effect for initial load
  useEffect(() => {
    if (hasLoaded.current) return;
    hasLoaded.current = true;
    
    setLoading(true);
    setError(null);
    setCurrentPage(1);
    setHasMore(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadArticles(1, false).finally(() => setLoading(false));
  }, []);

  const handleLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    const nextPage = currentPage + 1;
    await loadArticles(nextPage, true);
    setCurrentPage(nextPage);
    setLoadingMore(false);
  };

  if (loading) {
    return (
      <div className={styles.photoGalleryPage}>
        <div className={styles.loading}>Загрузка фотогалереи...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.photoGalleryPage}>
        <div className={styles.error}>Ошибка: {error}</div>
      </div>
    );
  }

  return (
    <div className={styles.photoGalleryPage}>
      <div className={styles.articlesList}>
        {articles.map((article) => (
          <ArticleBlock key={article.id} article={article} />
        ))}
      </div>
      
      {hasMore && (
        <div className={styles.loadMoreContainer}>
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className={styles.loadMoreButton}
          >
            {loadingMore ? 'Загрузка...' : 'Загрузить еще'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
