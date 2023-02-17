import React from "react";
import './Portfolio.scss';
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__list">
        <Link to="/" className="link portfolio__item">Статичный сайт</Link>
        <Link to="/" className="link portfolio__item">Адаптивный сайт</Link>
        <Link to="/" className="link portfolio__item">Одностраничное приложение</Link>
      </div>
    </section>
  );
}

export default Portfolio;