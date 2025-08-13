import React from 'react';
import PatriarhPanel from './PatriarhPanel';
import Svyatini from './Svyatini';
const ArticlePanel = ({ panel }) => {
    // Convert the panel data to match the Panel type structure
    const panelData = {
        id: panel.id,
        documentId: panel.documentId,
        title: panel.title,
        description: panel.description,
        position: panel.position,
        link: panel.link,
        createdAt: panel.createdAt,
        updatedAt: panel.updatedAt,
        publishedAt: panel.publishedAt,
        locale: panel.locale,
        image: panel.image,
        data: panel.data
    };
    // Render the appropriate component based on panel type
    switch (panel.data?.type) {
        case 'patriarh':
            return <PatriarhPanel panel={panelData}/>;
        case 'svyatini':
            return <Svyatini />;
        default:
            // For unsupported types, return null
            return null;
    }
};
export default ArticlePanel;
