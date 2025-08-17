import React, { useState } from 'react';
import MobileCategoryNav from './MobileCategoryNav';
import HeaderSocialLinks from './HeaderSocialLinks';
import Logo from './Logo';
import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
  onSearch: (q: string) => void;
  setSearchResults: (results: any[] | null) => void;
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onSearch, setSearchResults, isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search);
    onClose();
  };

  const handleCategoryClick = () => {
    setSearch('');
    setSearchResults(null);
    onClose();
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className={styles.overlay} onClick={onClose} />
      )}
      
      {/* Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuHeader}>
          <Logo onClick={() => {}} />
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className={styles.menuContent}>
          {/* Search */}
          <div className={styles.searchSection}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Поиск..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>🔍</button>
            </form>
          </div>
          
          {/* Category Navigation */}
          <div className={styles.navSection}>
            <h4>Категории</h4>
            <MobileCategoryNav 
              onCategoryClick={handleCategoryClick}
              expandedCategories={expandedCategories}
              onToggleCategory={toggleCategory}
            />
          </div>
          
          {/* Social Links */}
          <div className={styles.socialSection}>
            <h4>Социальные сети</h4>
            <HeaderSocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
