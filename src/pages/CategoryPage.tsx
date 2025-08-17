import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCategories } from '../contexts/CategoryContext';
import ArticlesList from '../components/ArticlesList';
import CmsImage from '../components/CmsImage';
import styles from './CategoryPage.module.scss';

const CategoryPage: React.FC = () => {
  const { slug } = useParams();
  const { getCategoryBySlug } = useCategories();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const category = slug ? getCategoryBySlug(slug) : null;

  return (
    <div className={styles.categoryPage}>
      <CmsImage image={category?.image} variant="category" />
      <ArticlesList categorySlug={slug} />
    </div>
  );
};

export default CategoryPage; 