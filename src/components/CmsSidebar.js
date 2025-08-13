import React, { useState } from 'react';
import { getSidebarPanels } from '../services/strapiService';
import PatriarhPanel from './PatriarhPanel';
import Svyatini from './Svyatini';
import styles from './CmsSidebar.module.scss';
import { useLanguage } from '../contexts/LanguageContext';
import { useRunOnceWithDeps } from '../hooks/useRunOnce';
const CmsSidebar = () => {
    const [panels, setPanels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { language } = useLanguage();
    const locale = language === 'BY' ? 'be' : 'ru';
    useRunOnceWithDeps(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getSidebarPanels(locale);
            const formattedPanels = data.data.map((item) => ({
                id: item.id,
                documentId: item.documentId,
                title: item.title,
                description: item.description,
                position: item.position,
                link: item.link,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                publishedAt: item.publishedAt,
                locale: item.locale,
                image: item.image,
                data: item.data
            }));
            setPanels(formattedPanels);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
    }, [locale]);
    const renderPanel = (panel) => {
        switch (panel.data?.type) {
            case 'patriarh':
                return <PatriarhPanel key={panel.id} panel={panel}/>;
            case 'svyatini':
                return <Svyatini key={panel.id}/>;
            default:
                // For unsupported types, you can add more cases here
                return null;
        }
    };
    if (loading) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    if (error) {
        return <div className={styles.error}>Ошибка: {error}</div>;
    }
    if (panels.length === 0) {
        return null; // Don't render anything if no panels
    }
    return (<div className={styles.cmsSidebar}>
      {panels.map(renderPanel)}
    </div>);
};
export default CmsSidebar;
