import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar';
import RobotEmbed from '../../components/robot/RobotEmbed';
import './home.css';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

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
