import React from 'react';
import FirstCategoryArticles from '../components/FirstCategoryArticles';
import MainNews from '../components/MainNews';
import Documents from '../components/Documents';
import Announcements from '../components/Announcements';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <MainNews />
      <Documents />
      <Announcements />
      <FirstCategoryArticles />
    </div>
  );
};

export default HomePage; 