import React from 'react';
import { Link } from 'react-router';
import { Image, Typography } from 'antd';
import './navbar.css';

const { Text } = Typography;

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to={'/'}>
          <Image preview={false} src="/logo.png" alt="Logo" height={40} />
        </Link>
      </div>
      <div className="navbar__controls">
        <Text className="navbar__lang-label">Язык сайта:</Text>
        <select className="navbar__lang-switcher">
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>
    </nav>
  );
}
