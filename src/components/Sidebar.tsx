import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryTree from './CategoryTree';
import CmsSidebar from './CmsSidebar';
import OrthodoxCalendar from './OrthodoxCalendar';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  selectedCategorySlug?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategorySlug }) => {
  const location = useLocation();
  const { language } = useLanguage();
  const langPrefix = language === 'BY' ? '/by' : '';

  // Check if we're on the HomePage
  const isHomePage = location.pathname === `${langPrefix}/` || location.pathname === '/';

  return (
    <aside className={styles.sidebar}>
      {isHomePage && <CmsSidebar />}
      <div className={styles.sidebarBlock}>
        <CategoryTree selectedCategorySlug={selectedCategorySlug} />
      </div>
      {isHomePage && <OrthodoxCalendar />}
    </aside>
  );
};

export default Sidebar; 