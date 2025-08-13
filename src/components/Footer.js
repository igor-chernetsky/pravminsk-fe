import React from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../contexts/CategoryContext';
import { useLanguage } from '../contexts/LanguageContext';
import PhotoReports from './PhotoReports';
import styles from './Footer.module.scss';
const Footer = () => {
    const { categories } = useCategories();
    const { language } = useLanguage();
    const langPrefix = language === 'BY' ? '/by' : '';
    return (<footer className={styles.footer}>
      <div className={styles.footerColumns}>
        {/* First column: About Project */}
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>О проекте</h3>
          <div className={styles.columnContent}>
            <p>
              Сайт создан по благословению Патриаршего Экзарха всея Беларуси Митрополита Минского и Заславского Павла.
            </p>
            <p>
              Мнение редколлегии Информационного отдела может не совпадать с мнением авторов статей.
            </p>
            <p>
              При использовании материалов ссылка на сайт Минской епархии обязательна
            </p>
          </div>
        </div>

        {/* Second column: Useful Links */}
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Полезные ссылки</h3>
          <div className={styles.columnContent}>
            <ul className={styles.linksList}>
              {categories && categories.map((category) => (<li key={category.id}>
                  <Link to={`${langPrefix}/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>))}
            </ul>
          </div>
        </div>

        {/* Third column: Photo Reports */}
        <div className={styles.footerColumn}>
          <PhotoReports />
        </div>
      </div>

      <div className={styles.footerCopyright}>
        ©2025 Минская епархия Белорусской Православной Церкви Московского Патриархата.
      </div>
    </footer>);
};
export default Footer;
