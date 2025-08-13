import React, { useEffect, useState } from 'react';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import styles from './SocialLinks.module.scss';
import { getSocials } from '../services/strapiService';
const cmsUrl = import.meta.env.VITE_CMS_URL;
const SocialLinks = () => {
    const { language } = useLanguage();
    const { t } = useTranslation();
    const [links, setLinks] = useState([]);
    const locale = language === 'BY' ? 'be' : 'ru';
    useEffect(() => {
        (async () => {
            const data = await getSocials(locale);
            setLinks(data.data || []);
        })();
    }, [locale]);
    return (<div className={styles.socialLinksSection}>
      <div className={styles.socialLinksTitle}>{t('socials_title')}</div>
      <div className={styles.socialLinksRow}>
        {links.map(link => (<a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLinkIcon}>
            <span className={styles.socialIconCircle}>
              {link.image ? (<img src={`${cmsUrl}${link.image}`} alt="social" className={styles.socialIconImg}/>) : ('🔗')}
            </span>
          </a>))}
      </div>
    </div>);
};
export default SocialLinks;
