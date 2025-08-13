import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCategories } from '../contexts/CategoryContext';
import styles from './CategoryTree.module.scss';
const CategoryTree = ({ selectedCategorySlug }) => {
    const { categories, loading, error, getCategoryBySlug } = useCategories();
    const location = useLocation();
    if (loading)
        return <div className={styles.treeTitle}>Загрузка категорий...</div>;
    if (error)
        return <div className={styles.treeTitle}>Ошибка: {error}</div>;
    if (!categories || !categories.length)
        return <div className={styles.treeTitle}>Нет категорий</div>;
    // Find the first-level parent category of the selected category
    const findFirstLevelParent = (targetSlug) => {
        for (const category of categories) {
            // Check if the target is a direct child of this category
            if (category.child && category.child.some((child) => child.slug === targetSlug)) {
                return category;
            }
            // Check deeper levels
            if (category.child) {
                for (const child of category.child) {
                    if (child.child && child.child.some((grandChild) => grandChild.slug === targetSlug)) {
                        return category; // Return the first-level parent
                    }
                }
            }
        }
        return null;
    };
    // Get the category to display in sidebar
    let displayCategory;
    if (selectedCategorySlug) {
        // Check if selected category is a first-level category
        const isFirstLevel = categories.some(cat => cat.slug === selectedCategorySlug);
        if (isFirstLevel) {
            displayCategory = getCategoryBySlug(selectedCategorySlug);
        }
        else {
            // Find the first-level parent
            displayCategory = findFirstLevelParent(selectedCategorySlug);
        }
    }
    // Fallback to first category if no display category found
    if (!displayCategory) {
        displayCategory = categories[0];
    }
    const childCategories = displayCategory?.child || [];
    if (!childCategories.length) {
        return <div className={styles.treeTitle}>Нет подкатегорий</div>;
    }
    const isActive = (slug) => {
        return location.pathname === `/category/${slug}` || selectedCategorySlug === slug;
    };
    const getCategoryLink = (category) => {
        // If category has content, link to the article instead of category page
        if (category.content) {
            return `/article/${category.content.slug}`;
        }
        return `/category/${category.slug}`;
    };
    return (<div className={styles.categoryTree}>
      <div className={styles.header}>
        <h3 className={styles.categoryTitle}>{displayCategory.name}</h3>
        <div className={styles.divider}></div>
      </div>
      {childCategories && childCategories.map((child) => (<div key={child.id} className={styles.categoryItem}>
          <Link to={getCategoryLink(child)} className={`${styles.categoryLink} ${isActive(child.slug) ? styles.active : ''}`}>
            {child.name}
          </Link>
          {child.child && child.child.length > 0 && (<div className={styles.subcategoryList}>
              {child.child && child.child.map((grandChild) => (<div key={grandChild.id} className={styles.subcategoryItem}>
                  <Link to={getCategoryLink(grandChild)} className={`${styles.subcategoryLink} ${isActive(grandChild.slug) ? styles.active : ''}`}>
                    • {grandChild.name}
                  </Link>
                </div>))}
            </div>)}
        </div>))}
    </div>);
};
export default CategoryTree;
