import React from 'react';
import ArticleBlock from './ArticleBlock';
import type { Article } from '../types/Article';
import styles from './SearchResults.module.scss';

interface SearchResultsProps {
  results: Article[];
  loading: boolean;
  error: string | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, loading, error }) => {
  if (loading) return <div className={styles.loading}>Поиск статей...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;
  if (!results.length) return <div className={styles.empty}>Ничего не найдено.</div>;
  
  return (
    <div className={styles.searchResults}>
      <h2 className={styles.searchTitle}>Результаты поиска</h2>
      {results.map(article => <ArticleBlock key={article.id} article={article} />)}
    </div>
  );
};

export default SearchResults; 