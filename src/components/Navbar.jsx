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
  <option value="en_US">English</option>
  <option value="es_ES">Español</option>
  <option value="ar_AR">العربية</option>
  <option value="de_DE">Deutsch</option>
  <option value="fr_FR">Français</option>
  <option value="id_ID">Bahasa Indonesia</option>
  <option value="it_IT">Italiano</option>
  <option value="ja_JP">日本語</option>
  <option value="ko_KR">한국어</option>
  <option value="nl_NL">Nederlands</option>
  <option value="pt_BR">Português (Brasil)</option>
  <option value="ru_RU">Русский</option>
  <option value="th_TH">ไทย</option>
  <option value="tl_PH">Tagalog</option>
  <option value="tr_TR">Türkçe</option>
  <option value="uk_UA">Українська</option>
  <option value="vi_VN">Tiếng Việt</option>
  <option value="zh_CN">中文 (简体)</option>
  <option value="hu_HU">Magyar</option> {/* Hungarian */}
  <option value="el_GR">Ελληνικά</option> {/* Greek */}
  <option value="hi_IN">हिन्दी</option> {/* Hindi */}
  <option value="fa_IR">فارسی</option> {/* Persian */}
  <option value="pl_PL">Polski</option> {/* Polish */}
  <option value="zh_TW">中文 (繁體)</option> {/* Traditional Chinese */}
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
