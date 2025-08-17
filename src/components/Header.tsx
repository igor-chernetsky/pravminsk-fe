import React, { useState } from 'react';
import CategoryNav from './CategoryNav';
import styles from './Header.module.scss';
import HeaderSocialLinks from './HeaderSocialLinks';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  onSearch: (q: string) => void;
  setSearchResults: (results: any[] | null) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, setSearchResults }) => {
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search);
  };

  const handleLogoClick = () => {
    setSearch('');
    setSearchResults(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerContent}>
            {/* Desktop Search - hidden on mobile */}
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
            
            <div className={styles.logoContainer}>
              <Logo onClick={handleLogoClick} />
            </div>
            
            {/* Desktop Social Links - hidden on mobile */}
            <div className={styles.socialLinksContainer}>
              <HeaderSocialLinks />
            </div>
            
            {/* Mobile Menu Button - positioned on the right */}
            <div className={styles.mobileMenuButtonContainer}>
              <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                ☰
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Category Navigation - hidden on mobile */}
        <div className={styles.headerNavRow}>
          <div className={styles.headerContent}>
            <CategoryNav onCategoryClick={() => { setSearch(''); setSearchResults(null); }} />
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu 
        onSearch={onSearch}
        setSearchResults={setSearchResults}
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
};

export default Header;
