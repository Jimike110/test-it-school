import React, { useEffect, useRef } from 'react';
import NavBar from '../../components/navbar';
import RobotEmbed from '../../components/robot/RobotEmbed';
import './home.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export default function Home() {
  const audioRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    audioRef.current = new Audio('/assets/sounds/zapsplat_multimedia_button_click_bright_003_92100.mp3');
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll('.button');

    const handleClick = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error('Ошибка при воспроизведении звука:', err);
      });
    };

    // Вешаем слушатель на все кнопки
    buttons.forEach(btn => btn.addEventListener('click', handleClick));

    return () => {
      buttons.forEach(btn => btn.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className="home">
      <title>{t('page_title')}</title>
      <NavBar className="home__nav" />

      <main className="home__main">
        <section className="home__hero">
          <div className="home__graphic">
            <RobotEmbed className="robot-embed" />
          </div>

          <div className="home__content">
            <h2 className="home__title">
              {t('hero_text')}
            </h2>
            <div className="home__actions">
              <button className="button button--primary">
                {t('start_button_text')}
              </button>
              <Link to="/" className="button button--secondary">
                {t('has_account_button_text')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
