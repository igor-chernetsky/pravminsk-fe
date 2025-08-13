import React from 'react';
import { Link } from 'react-router-dom';
import CmsImage from './CmsImage';
import styles from './PatriarhPanel.module.scss';
import { useLanguage } from '../contexts/LanguageContext';
const PatriarhPanel = ({ panel }) => {
    const { language } = useLanguage();
    const langPrefix = language === 'BY' ? '/by' : '';
    const links = [
        { name: 'bio', label: 'Биография', url: panel.data?.bio },
        { name: 'slujenie', label: 'Служение', url: panel.data?.slujenie },
        { name: 'poslaniya', label: 'Послания, слова, публикации', url: panel.data?.poslaniya },
        { name: 'deatelnost', label: 'Деятельность', url: panel.data?.deatelnost }
    ].filter(link => link.url); // Only show links that have URLs
    return (<div className={styles.patriarhPanel}>
      <h3 className={styles.title}>{panel.title}</h3>
      
      {panel.image && (<div className={styles.imageContainer}>
          <CmsImage image={panel.image} variant="thumbnail" className={styles.image}/>
        </div>)}
      
      {panel.description && (<p className={styles.description}>{panel.description}</p>)}
      
      {links.length > 0 && (<>
          <hr className={styles.divider}/>
          <nav className={styles.links}>
            {links.map((link) => (<Link key={link.name} to={`${langPrefix}${link.url}`} className={styles.link}>
                <img src={`/img/icons/${link.name}.svg`} alt="" className={styles.icon}/>
                <span>{link.label}</span>
              </Link>))}
          </nav>
        </>)}
    </div>);
};
export default PatriarhPanel;
