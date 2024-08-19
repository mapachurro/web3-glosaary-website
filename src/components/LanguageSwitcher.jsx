// src/components/LanguageSwitcher.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);

    // Update the URL with the new language
    const currentPath = window.location.pathname;
    const newPath = `/${selectedLanguage}${currentPath}`;

    // Navigate to the new path with the selected language
    navigate(newPath);
  };

  return (
    <select onChange={handleLanguageChange} value={i18n.language}>
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
      <option value="zh-cn">简体中文</option>
    </select>
  );
};

export default LanguageSwitcher;
