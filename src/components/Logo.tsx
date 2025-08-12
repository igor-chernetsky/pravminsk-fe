import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import pravLogo from '../assets/img/prav-logo.png';

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <Link to="/" className={styles.logo} style={{ textDecoration: 'none', color: 'inherit' }} onClick={onClick}>
      <div className={styles.logoContainer}>
        <img src={pravLogo} alt="Православная Церковь" className={styles.logoImage} />
        <div className={styles.logoText}>
          <div className={styles.logoTitle}>Минская епархия</div>
          <div className={styles.logoSubtitle}>Белорусской Православной Церкви</div>
        </div>
      </div>
    </Link>
  );
};

export default Logo; 