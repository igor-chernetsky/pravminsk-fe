import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { useCategories } from '../contexts/CategoryContext';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import styles from './CategoryNav.module.scss';

declare global {
  interface Window { __highlightCategorySlug?: string; }
}

interface CategoryNavProps {
  onCategoryClick?: () => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ onCategoryClick }) => {
  const { categories } = useCategories();
  const location = useLocation();
  const { language } = useLanguage();
  const langPrefix = language === 'BY' ? '/by' : '';

  // Determine if we're on an article or category page
  const categoryMatch = matchPath('/category/:slug', location.pathname);

  // Use global variable for highlight if set by ArticlePage
  let highlightCategorySlug: string | undefined = window.__highlightCategorySlug;
  if (!highlightCategorySlug && categoryMatch && categoryMatch.params.slug) {
    highlightCategorySlug = categoryMatch.params.slug;
  }

  const isActive = (slug: string) => {
    if (highlightCategorySlug) return slug === highlightCategorySlug;
    return location.pathname === `/category/${slug}`;
  };

  const isParentActive = (category: any) => {
    if (highlightCategorySlug) {
      if (category.slug === highlightCategorySlug) return true;
      if (category.child) {
        return category.child.some((child: any) => child.slug === highlightCategorySlug || (child.child && child.child.some((grandChild: any) => grandChild.slug === highlightCategorySlug)));
      }
      return false;
    }
    // Check if this category is active
    if (isActive(category.slug)) return true;
    // Check if any child category is active
    if (category.child) {
      return category.child.some((child: any) => {
        if (isActive(child.slug)) return true;
        // Check grandchildren
        if (child.child) {
          return child.child.some((grandChild: any) => isActive(grandChild.slug));
        }
        return false;
      });
    }
    return false;
  };

  const getCategoryLink = (category: any) => {
    // If category has content, link to the article instead of category page
    if (category.link) {
      return category.link;
    }
    if (category.content) {
      return `${langPrefix}/article/${category.content.slug}`;
    }
    return `${langPrefix}/category/${category.slug}`;
  };

  const renderCategories = (categories: any[]) => (
    <ul className={styles.navBar}>
      {categories.map((cat) => (
        <li key={cat.id} className={styles.dropdownContainer}>
          <Link 
            to={getCategoryLink(cat)} 
            className={`${styles.navItem} ${isParentActive(cat) ? styles.active : ''}`}
            onClick={onCategoryClick}
          >
            {cat.name}
          </Link>
          {cat.child && cat.child.length > 0 && (
            <ul className={styles.dropdown}>
              {cat.child.map((sub: any) => (
                <li key={sub.id} className={sub.child && sub.child.length > 0 ? styles.dropdownContainer : ''}>
                  <Link 
                    to={getCategoryLink(sub)} 
                    className={`${styles.navItem} ${isActive(sub.slug) ? styles.active : ''}`}
                    onClick={onCategoryClick}
                  >
                    {sub.name}
                  </Link>
                  {sub.child && sub.child.length > 0 && (
                    <ul className={styles.nestedDropdown}>
                      {sub.child.map((grandChild: any) => (
                        <li key={grandChild.id}>
                          <Link 
                            to={getCategoryLink(grandChild)} 
                            className={`${styles.navItem} ${isActive(grandChild.slug) ? styles.active : ''}`}
                            onClick={onCategoryClick}
                          >
                            {grandChild.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return <nav style={{ width: '100%' }}>{renderCategories(categories)}</nav>;
};

export default CategoryNav; 