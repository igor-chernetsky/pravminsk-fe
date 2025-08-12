import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './HeaderSocialLinks.module.scss';
import { getSocials } from '../services/strapiService';
const cmsUrl = import.meta.env.VITE_CMS_URL;

const HeaderSocialLinks: React.FC = () => {
  const { language } = useLanguage();
  const [links, setLinks] = useState<any[]>([]);
  const locale = language === 'BY' ? 'be' : 'ru';
  
  useEffect(() => {
    (async () => {
      const data = await getSocials(locale);
      setLinks(data.data || []);
    })();
  }, [locale]);
  
  return (
    <div className={styles.headerSocialLinks}>
      {links.map(link => (
        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLinkIcon}>
          <span className={styles.socialIconCircle}>
            {link.image ? (
              <img src={`${cmsUrl}${link.image}`} alt="social" className={styles.socialIconImg} />
            ) : (
              '🔗'
            )}
          </span>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocialLinks; 