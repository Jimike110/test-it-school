import React from 'react';
import { Link } from 'react-router';
import { Image, Typography } from 'antd';
import './navbar.css';

const { Text } = Typography;

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className='container'>
      <div className="navbar__brand">
        <Link to={'/'}>
          <Image preview={false} src="./assets/images/logo.png" alt="Logo" height={40} />
        </Link>
      </div>
      <div className="navbar__controls">
        <Text className="navbar__lang-label">ЯЗЫК САЙТА:</Text>
        <select className="navbar__lang-switcher">
          <option value="ru">РУССКИЙ</option>
          <option value="en">ENGLISH</option>
        </select>
      </div>
      </div>
    </nav>
  );
}
