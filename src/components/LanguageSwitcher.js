import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './LanguageSwitcher.module.scss';
const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const handleLanguageSwitch = (lang) => {
        if (lang === language)
            return;
        let newPath = location.pathname;
        if (lang === 'BY') {
            if (!newPath.startsWith('/by')) {
                newPath = '/by' + (newPath === '/' ? '' : newPath);
            }
        }
        else {
            if (newPath.startsWith('/by')) {
                newPath = newPath.replace(/^\/by/, '') || '/';
            }
        }
        setLanguage(lang);
        navigate(newPath + location.search, { replace: true });
    };
    return (<div className={styles.languageSwitcher}>
      <button className={language === 'RU' ? styles.activeLang : ''} onClick={() => handleLanguageSwitch('RU')}>
        RU
      </button>
      <button className={language === 'BY' ? styles.activeLang : ''} onClick={() => handleLanguageSwitch('BY')}>
        BY
      </button>
    </div>);
};
export default LanguageSwitcher;
