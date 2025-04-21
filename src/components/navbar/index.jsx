import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import './navbar.css';

const { Text } = Typography;

export default function NavBar() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <Link to="/">
            <Image
              preview={false}
              src="/assets/images/logo.png"
              alt="Logo"
              height={40}
            />
          </Link>
        </div>

        <div className="navbar__controls">
          <Text className="navbar__lang-label">{t('language_switcher_label')}:</Text>

          <select
            className="navbar__lang-switcher"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="ru">РУССКИЙ</option>
            <option value="en">ENGLISH</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
