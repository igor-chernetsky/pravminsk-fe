import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CmsImage from '../components/CmsImage';
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
import { getArticleBySlug, getArticles } from '../services/strapiService';
import { useRunOnceWithDeps } from '../hooks/useRunOnce';
import headerImage from '../assets/img/heder.png';
import { markdownComponents } from '../components/MarkdownComponents';
import '../components/HighslideImage.module.scss';
const formatDate = (dateStr) => {
    if (!dateStr)
        return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
};
const ArticlePage = () => {
    const { slug: routeSlug } = useParams();
    const location = window.location.pathname;
    const slug = location === '/kontakty' ? 'kontakty' : routeSlug;
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { getParentCategorySlug, getCategoryPathBySlug, getChildrenBySlug } = useCategories();
    const [relatedArticles, setRelatedArticles] = useState([]);
    const { language } = useLanguage();
    const langPrefix = language === 'BY' ? '/by' : '';
    const locale = language === 'BY' ? 'be' : 'ru';
    const { t } = useTranslation();
    // Effect for article loading - handles both initial load and prop changes
    useRunOnceWithDeps(async () => {
        if (!slug)
            return;
        setLoading(true);
        setError(null);
        try {
            console.log('load');
            const data = await getArticleBySlug({ locale, slug });
            const item = data.data || null;
            setArticle(item);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
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
                    const articles = (data.data || []).filter((a) => a.slug !== article.slug).slice(0, 5);
                    setRelatedArticles(articles);
                }
                catch (e) {
                    // Optionally handle error
                }
            })();
        }
    }, [article, locale]);
    let breadcrumbs = [];
    if (article && article.categories?.length > 0) {
        const firstCategory = article.categories[0];
        const path = getCategoryPathBySlug(firstCategory.slug);
        breadcrumbs = path.map(cat => ({ name: cat.name, slug: cat.slug }));
    }
    const isKontaktyPage = slug === 'kontakty';
    if (loading)
        return <div className={styles.loading}>Загрузка статьи...</div>;
    if (error)
        return <div className={styles.error}>Ошибка: {error}</div>;
    if (!article)
        return <div className={styles.empty}>Статья не найдена.</div>;
    const subcategories = article && article.categories?.length > 0 ? getChildrenBySlug(article.categories[0].slug) : [];
    return (<>
      <div className={styles.fullWidthHeader}>
        <div className={`${styles.heroSection} ${article.cover ? styles.heroCover : ''}`}>
          {article.cover ? (<CmsImage image={article.cover} variant="category" className={styles.coverImage} height="100%"/>) : (<img src={headerImage} alt="Default header image" className={`${styles.cmsImage} ${styles.categoryImage} ${styles.coverImage}`}/>)}
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.title} style={isKontaktyPage ? { marginBottom: 0 } : {}}>{article.title}</h1>
              {!isKontaktyPage && (article.createdAt || article.publishedAt) && (<div className={styles.date}>{formatDate(article.createdAt || article.publishedAt)}</div>)}
            </div>
          </div>
        </div>
        {breadcrumbs.length > 0 && (<nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (<span key={crumb.slug}>
                <Link to={`${langPrefix}/category/${crumb.slug}`}>{crumb.name}</Link>
                {idx < breadcrumbs.length - 1 && <span className={styles.breadcrumbSep}> / </span>}
              </span>))}
            <span className={styles.breadcrumbSep}> / </span>
            <span className={styles.breadcrumbCurrent}>{article.title}</span>
          </nav>)}
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.articlePage}>
          {Array.isArray(article.blocks) && article.blocks.length > 0 && (<div className={styles.content}>
              {article.blocks.map((block) => (<div key={block.id} style={{ marginBottom: '2rem' }}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
                    {block.body?.replace(/{site_url}/g, import.meta.env.VITE_IMAGE_BASE_URL || '')}
                  </ReactMarkdown>
                </div>))}
            </div>)}
          <h1>
          </h1>
          {(article.photos?.length > 0 || article.old_photos?.length > 0) && (<PhotoGallery photos={article.photos || article.old_photos}/>)}
        </div>
        {!isKontaktyPage && (<div className={styles.sidebarWrapper}>
            {article.panel && <ArticlePanel panel={article.panel}/>}
            <Subcategories subcategories={subcategories} categoryName={article?.categories?.[0]?.name}/>
            <RelatedArticles articles={relatedArticles}/>
            <ArchiveBlock />
          </div>)}
      </div>
    </>);
};
export default ArticlePage;
