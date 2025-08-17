import React from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../contexts/CategoryContext';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './MobileCategoryNav.module.scss';

interface MobileCategoryNavProps {
  onCategoryClick: () => void;
  expandedCategories: Set<string>;
  onToggleCategory: (categoryId: string) => void;
}

const MobileCategoryNav: React.FC<MobileCategoryNavProps> = ({ 
  onCategoryClick, 
  expandedCategories, 
  onToggleCategory 
}) => {
  const { categories } = useCategories();
  const { language } = useLanguage();
  const langPrefix = language === 'BY' ? '/by' : '';

  const getCategoryLink = (category: any) => {
    if (category.link) {
      return category.link;
    }
    if (category.content) {
      return `${langPrefix}/article/${category.content.slug}`;
    }
    return `${langPrefix}/category/${category.slug}`;
  };

  const renderCategories = (categories: any[], level: number = 0) => (
    <ul className={`${styles.mobileNavList} ${styles[`level${level}`]}`}>
      {categories.map((cat) => (
        <li key={cat.id} className={styles.mobileNavItem}>
          <div className={styles.mobileNavHeader}>
            <Link 
              to={getCategoryLink(cat)} 
              className={styles.mobileNavLink}
              onClick={onCategoryClick}
            >
              {cat.name}
            </Link>
            {cat.child && cat.child.length > 0 && (
              <button
                className={`${styles.expandButton} ${expandedCategories.has(cat.id) ? styles.expanded : ''}`}
                onClick={() => onToggleCategory(cat.id)}
                aria-label={expandedCategories.has(cat.id) ? 'Свернуть' : 'Развернуть'}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
          {cat.child && cat.child.length > 0 && expandedCategories.has(cat.id) && (
            <div className={styles.mobileNavChildren}>
              {renderCategories(cat.child, level + 1)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={styles.mobileCategoryNav}>
      {renderCategories(categories)}
    </nav>
  );
};

export default MobileCategoryNav;
