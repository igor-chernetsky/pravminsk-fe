import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ArticlePage.module.scss';
import { useCategories } from '../contexts/CategoryContext';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import ArchiveBlock from '../components/ArchiveBlock';
import RelatedArticles from '../components/RelatedArticles';
import Subcategories from '../components/Subcategories';
import PhotoGallery from '../components/PhotoGallery';
import ArticlePanel from '../components/ArticlePanel';
import HeroSection from '../components/HeroSection';
import { getArticleBySlug, getArticles } from '../services/strapiService';
import { useRunOnceWithDeps } from '../hooks/useRunOnce';
import { markdownComponents } from '../components/MarkdownComponents';
import '../components/HighslideImage.module.scss';



const ArticlePage: React.FC = () => {
  const { slug: routeSlug } = useParams<{ slug?: string }>();
  const location = window.location.pathname;
  const slug = location === '/kontakty' ? 'kontakty' : routeSlug;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { getParentCategorySlug, getCategoryPathBySlug, getChildrenBySlug } = useCategories();
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const { language } = useLanguage();
  const langPrefix = language === 'BY' ? '/by' : '';
  const locale = language === 'BY' ? 'be' : 'ru';
  const { t } = useTranslation();

  // Effect for article loading - handles both initial load and prop changes
  useRunOnceWithDeps(async () => {
    if (!slug) return;
    
    setLoading(true);
    setError(null);
    try {
      console.log('load');
      const data = await getArticleBySlug({ locale, slug });
      const item = data.data || null;
      setArticle(item);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [slug, locale]);

  useEffect(() => {
    if (article && article.categories?.length > 0) {
      const firstCategory = article.categories[0];
      const parentSlug = getParentCategorySlug(firstCategory.slug) || firstCategory.slug;
      window.__highlightCategorySlug = parentSlug;
    }
    return () => {
      window.__highlightCategorySlug = undefined;
    };
  }, [article, getParentCategorySlug]);

  useEffect(() => {
    if (article && article.categories?.length > 0) {
      const firstCategory = article.categories[0];
      (async () => {
        try {
          const data = await getArticles({ locale, categorySlug: firstCategory.slug });
          const articles = (data.data || []).filter((a: any) => a.slug !== article.slug).slice(0, 5);
          setRelatedArticles(articles);
        } catch (e) {
          // Optionally handle error
        }
      })();
    }
  }, [article, locale]);

  let breadcrumbs: { name: string; slug: string }[] = [];
  if (article && article.categories?.length > 0) {
    const firstCategory = article.categories[0];
    const path = getCategoryPathBySlug(firstCategory.slug);
    breadcrumbs = path.map(cat => ({ name: cat.name, slug: cat.slug }));
  }

  const isKontaktyPage = slug === 'kontakty';

  if (loading) return <div className={styles.loading}>Загрузка статьи...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;
  if (!article) return <div className={styles.empty}>Статья не найдена.</div>;

  const subcategories = article && article.categories?.length > 0 ? getChildrenBySlug(article.categories[0].slug) : [];

  return (
    <>
      <HeroSection
        title={article.title}
        date={isKontaktyPage ? undefined : (article.createdAt || article.publishedAt)}
        cover={article.cover}
        breadcrumbs={breadcrumbs}
        currentPageTitle={article.title}
        langPrefix={langPrefix}
        showDate={!isKontaktyPage}
      />
      <div className={styles.detailsRow}>
        <div className={styles.articlePage}>
          {Array.isArray(article.blocks) && article.blocks.length > 0 && (
            <div className={styles.content}>
              {article.blocks.map((block: any) => (
                <div key={block.id} style={{ marginBottom: '2rem' }}>
                  <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    components={markdownComponents}
                  >
                    {block.body?.replace(/{site_url}/g, import.meta.env.VITE_IMAGE_BASE_URL || '')}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
          )}
          <h1>
          </h1>
          {(article.photos?.length > 0 || article.old_photos?.length > 0) && (
            <PhotoGallery photos={article.photos || article.old_photos} />
          )}
        </div>
        {!isKontaktyPage && (
          <div className={styles.sidebarWrapper}>
            {article.panel && <ArticlePanel panel={article.panel} />}
            <Subcategories 
              subcategories={subcategories} 
              categoryName={article?.categories?.[0]?.name}
            />
            <RelatedArticles articles={relatedArticles} />
            <ArchiveBlock />
          </div>
        )}
      </div>
    </>
  );
};

export default ArticlePage;
