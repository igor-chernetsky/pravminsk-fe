import React from 'react';
import PatriarhPanel from './PatriarhPanel';
import Svyatini from './Svyatini';
import type { Panel } from '../types/Panel';

interface ArticlePanelProps {
  panel: any; // Using any for now since it comes from article.panel
}

const ArticlePanel: React.FC<ArticlePanelProps> = ({ panel }) => {
  // Convert the panel data to match the Panel type structure
  const panelData: Panel = {
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
      return <PatriarhPanel panel={panelData} />;
    case 'svyatini':
      return <Svyatini />;
    default:
      // For unsupported types, return null
      return null;
  }
};

export default ArticlePanel;
