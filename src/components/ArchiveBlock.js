import React from 'react';
import { useTranslation, useLanguage } from '../contexts/LanguageContext';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import styles from './ArchiveBlock.module.scss';
const ArchiveBlock = () => {
    const { t } = useTranslation();
    const { language } = useLanguage();
    const navigate = useNavigate();
    const langPrefix = language === 'BY' ? '/by' : '';
    const today = new Date();
    const handleDateChange = (value) => {
        const date = Array.isArray(value) ? value[0] : value;
        if (!date || !(date instanceof Date))
            return;
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        navigate(`${langPrefix}/search/date/${yyyy}-${mm}-${dd}`);
    };
    return (<div className={styles.archiveBlock}>
      <div className={styles.header}>
        <h3 className={styles.archiveTitle}>{t('archive_title')}</h3>
        <div className={styles.divider}></div>
      </div>
      <Calendar maxDate={today} onChange={handleDateChange} locale={language === 'BY' ? 'be-BY' : 'ru-RU'} tileDisabled={({ date }) => date > today}/>
    </div>);
};
export default ArchiveBlock;
