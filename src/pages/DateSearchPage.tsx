import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ArticlesList from '../components/ArticlesList';
import styles from './DateSearchPage.module.scss';

const DateSearchPage: React.FC = () => {
  const { date } = useParams<{ date: string }>();
  const { language } = useLanguage();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className={styles.dateSearchPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Статьи за {date ? formatDate(date) : 'выбранную дату'}
        </h1>
      </div>
      <ArticlesList date={date} />
    </div>
  );
};

export default DateSearchPage; 