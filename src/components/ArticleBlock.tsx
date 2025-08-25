import React from 'react';
import type { Article } from '../types/Article';
import styles from './ArticleBlock.module.scss';
import { Link } from 'react-router-dom';
import { getArticleImageUrl } from '../utils/imageUtils';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import headerImage from '../assets/img/heder.png';

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
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <Link to={`/article/${article.slug}`} className={styles.articleBlock} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
      <img 
        src={article.imageUrl && !imageError ? getArticleImageUrl(article.imageUrl) : headerImage} 
        alt={article.title} 
        className={styles.articleImage} 
        onError={() => setImageError(true)}
      />
      <div className={styles.articleContent}>
        <h3 className={styles.articleTitle}>{article.title}</h3>
        <div className={styles.articleDate}>{formatDate(article.createdAt || article.publishedAt)}</div>
        <div className={styles.articleDescription}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
          >
            {article.description}
          </ReactMarkdown>
        </div>
      </div>
    </Link>
  );
};

export default ArticleBlock; 