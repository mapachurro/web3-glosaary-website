import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar({ onLogoClick }) {
  // const navigate = useNavigate();
  const { i18n } = useTranslation();

  // const handleLogoClick = () => {
  //   onLogoClick(); // Clear search history
  //   navigate('/');
  // };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav style={styles.navbar}>
      <div onClick={onLogoClick} style={{cursor: 'pointer'}}>
        <img src="/src/components/education-dao-circle.png" alt="Logo" style={styles.logoImage} />
        Education DAO Glossary
      </div>
      <select onChange={handleLanguageChange} value={i18n.language} style={styles.languageSelector}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="ar">العربية</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
      <option value="id">Bahasa Indonesia</option>
      <option value="it">Italiano</option>
      <option value="ja">日本語</option>
      <option value="ko">한국어</option>
      <option value="nl">Nederlands</option>
      <option value="pt-br">Português (Brasil)</option>
      <option value="ru">Русский</option>
      <option value="th">ไทย</option>
      <option value="tl">Tagalog</option>
      <option value="tr">Türkçe</option>
      <option value="uk">Українська</option>
      <option value="vi">Tiếng Việt</option>
      <option value="zh-cn">中文 (简体)</option>
        
      </select>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logoImage: {
    marginRight: '0.5rem',
    height: '40px',
  },
  languageSelector: {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    padding: '5px',
  },
};

export default Navbar;
