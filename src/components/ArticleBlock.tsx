import React from 'react';
import type { Article } from '../types/Article';
import styles from './ArticleBlock.module.scss';
import { Link } from 'react-router-dom';
import { getArticleImageUrl } from '../utils/imageUtils';

interface ArticleBlockProps {
  article: Article;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const ArticleBlock: React.FC<ArticleBlockProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.slug}`} className={styles.articleBlock} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
      {article.imageUrl && (
        <img src={getArticleImageUrl(article.imageUrl)} alt={article.title} className={styles.articleImage} />
      )}
      <div className={styles.articleContent}>
        <h3 className={styles.articleTitle}>{article.title}</h3>
        <div className={styles.articleDate}>{formatDate(article.publishedAt)}</div>
        <div className={styles.articleDescription}>{article.description}</div>
      </div>
    </Link>
  );
};

export default ArticleBlock; 