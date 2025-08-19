import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Subcategories.module.scss';

interface SubcategoriesProps {
  subcategories: any[];
  categoryName?: string;
  className?: string;
}

const Subcategories: React.FC<SubcategoriesProps> = ({ subcategories, categoryName, className = '' }) => {
  const { language } = useLanguage();
  const langPrefix = language === 'BY' ? '/by' : '';
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  if (!subcategories || subcategories.length === 0) {
    return null;
  }

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className={`${styles.subcategories} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.subcategoriesTitle}>{categoryName || 'Подкатегории'}</h3>
        <div className={styles.divider}></div>
      </div>
      <ul className={styles.subcategoriesList}>
        {subcategories.map(sub => (
          <li key={sub.id} className={styles.subcategoryItem}>
            <div className={styles.subcategoryHeader}>
              <Link to={`${langPrefix}/category/${sub.slug}`}>{sub.name}</Link>
              {sub.child && sub.child.length > 0 && (
                <button
                  className={`${styles.expandButton} ${expandedItems.has(sub.id) ? styles.expanded : ''}`}
                  onClick={() => toggleExpanded(sub.id)}
                  aria-label={expandedItems.has(sub.id) ? 'Свернуть' : 'Развернуть'}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
            {sub.child && sub.child.length > 0 && (
              <ul className={`${styles.subcategoryList} ${expandedItems.has(sub.id) ? styles.expanded : ''}`}>
                {sub.child.map((grandChild: any) => (
                  <li key={grandChild.id} className={styles.subcategorySubItem}>
                    <Link to={`${langPrefix}/category/${grandChild.slug}`}>
                      • {grandChild.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subcategories; 