import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import CarouselPanel from './components/CarouselPanel';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import DateSearchPage from './pages/DateSearchPage';
import MapPage from './pages/MapPage';
import PhotoGallery from './pages/PhotoGallery';
import SearchResults from './components/SearchResults';
import { CategoryProvider, useCategories } from './contexts/CategoryContext';
import type { Article } from './types/Article';
import type { Panel } from './types/Panel';
import styles from './App.module.scss';
import ArticlePage from './pages/ArticlePage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import { getArticles, getPanels } from './services/strapiService';
import { useRunOnceWithDeps } from './hooks/useRunOnce';

const AppContent: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Article[] | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [panels, setPanels] = useState<Panel[]>([]);
  const location = useLocation();
  const { categories } = useCategories();
  const { language } = useLanguage();
  const langPrefix = language === 'BY' ? '/by' : '';
  const locale = language === 'BY' ? 'be' : 'ru';

  const handleSearch = async (q: string) => {
    if (!q.trim()) {
      setSearchResults(null);
      return;
    }
    setSearchLoading(true);
    setSearchError(null);
    setSearchResults([]);
    try {
      const data = await getArticles({ locale: language === 'BY' ? 'be' : 'ru', search: q });
      setSearchResults(data.data ? data.data.map((item: any) => ({
        id: item.id,
        title: item.title || item.attributes?.title,
        slug: item.slug || item.attributes?.slug,
        description: item.description || item.attributes?.description,
        imageUrl: item.imageUrl || item.attributes?.imageUrl,
        publishedAt: item.publishedAt || item.attributes?.publishedAt,
      })) : []);
    } catch (e: any) {
      setSearchError(e.message);
    } finally {
      setSearchLoading(false);
    }
  };

  // Extract category slug from URL or use first category for home page
  const categoryMatch = location.pathname.match(/\/category\/(.+)/);
  const selectedCategorySlug = categoryMatch ? categoryMatch[1] : (categories && categories.length > 0 ? categories[0].slug : undefined);

  const isArticlePage = /^(\/by)?\/article\//.test(location.pathname);
  const isHomePage = location.pathname === `${langPrefix}/` || location.pathname === '/';

  // Fetch panels for carousel
  useRunOnceWithDeps(async () => {
    try {
      const data = await getPanels(locale);
      const formattedPanels = data.data.map((item: any) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        position: item.position,
        link: item.link,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
        locale: item.locale,
        image: item.image,
      }));
      setPanels(formattedPanels);
    } catch (e: any) {
      console.error(e);
    }
  }, [locale]);

  return (
    <>
      {/* Header - Full width */}
      <Header onSearch={handleSearch} setSearchResults={setSearchResults} />
      {/* Main content area - Constrained width */}
      <div className={styles.appContainer}>
        {/* Carousel Panel - Full width, only on HomePage */}
        {isHomePage && !!panels?.length && (
          <div className={styles.carouselWrapper}>
            <CarouselPanel panels={panels} />
          </div>
        )}
        {isArticlePage || location.pathname === `${langPrefix}/karta` || location.pathname === '/karta' || location.pathname === `${langPrefix}/photogallery` || location.pathname === '/photogallery' ? (
          <div className={styles.articleLayout}>
            <main className={styles.articleMainContent}>
              <Routes>
                <Route path={`${langPrefix}/article/:slug`} element={<ArticlePage />} />
                <Route path={`${langPrefix}/karta`} element={<MapPage />} />
                <Route path="/karta" element={<MapPage />} />
                <Route path={`${langPrefix}/photogallery`} element={<PhotoGallery />} />
              </Routes>
            </main>
          </div>
        ) : (
          <div className={styles.mainLayout}>
            {/* Main Content */}
            <main className={styles.mainContent}>
              {searchResults !== null ? (
                <SearchResults results={searchResults} loading={searchLoading} error={searchError} />
              ) : (
                <Routes>
                  <Route path={`${langPrefix}/search/date/:date`} element={<DateSearchPage />} />
                  <Route path={`${langPrefix}/category/:slug`} element={<CategoryPage />} />
                  <Route path={`${langPrefix}/photogallery`} element={<PhotoGallery />} />
                  <Route path={`${langPrefix}/article/:slug`} element={<ArticlePage />} />
                  <Route path={`${langPrefix}/kontakty`} element={<ArticlePage key="kontakty" />} />
                  <Route path={`${langPrefix}/photogallery`} element={<PhotoGallery />} />
                  <Route path={`${langPrefix}/`} element={<HomePage />} />
                </Routes>
              )}
            </main>
            <div className={styles.sidebarWrapper}>
              <Sidebar selectedCategorySlug={selectedCategorySlug} />
            </div>
          </div>
        )}
      </div>

      {/* Footer - Full width */}
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CategoryProvider>
        <Router>
          <AppContent />
        </Router>
      </CategoryProvider>
    </LanguageProvider>
  );
};





export default App;
