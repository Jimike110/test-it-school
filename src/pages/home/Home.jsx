import React from 'react';
import { Link } from 'react-router';
import NavBar from '../../components/navbar';
import RobotEmbed from '../../components/robot/RobotEmbed';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <NavBar className="home__nav" />

      <main className="home__main">
        <section className="home__hero">
          <div className="home__graphic">
            <RobotEmbed className="robot-embed" />
          </div>

          <div className="home__content">
            <h2 className="home__title">
              Запишитесь на пробное занятие в IT‑Школе
            </h2>
            <div className="home__actions">
              <button className="button button--primary">
                НАЧАТЬ
              </button>
              <Link to="/" className="button button--secondary">
                У МЕНЯ УЖЕ ЕСТЬ АККАУНТ
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
