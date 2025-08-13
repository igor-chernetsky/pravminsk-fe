import React, { useState } from 'react';
import CategoryNav from './CategoryNav';
import styles from './Header.module.scss';
import HeaderSocialLinks from './HeaderSocialLinks';
import Logo from './Logo';
const Header = ({ onSearch, setSearchResults }) => {
    const [search, setSearch] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
    };
    const handleLogoClick = () => {
        setSearch('');
        setSearchResults(null);
    };
    return (<header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerContent}>
          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input type="text" placeholder="Поиск..." value={search} onChange={e => setSearch(e.target.value)} className={styles.searchInput}/>
            <button type="submit" className={styles.searchButton}>🔍</button>
          </form>
          <div className={styles.logoContainer}>
            <Logo onClick={handleLogoClick}/>
          </div>
          <div className={styles.socialLinksContainer}>
            <HeaderSocialLinks />
          </div>
        </div>
      </div>
      <div className={styles.headerNavRow}>
        <div className={styles.headerContent}>
          <CategoryNav onCategoryClick={() => { setSearch(''); setSearchResults(null); }}/>
        </div>
      </div>
    </header>);
};
export default Header;
