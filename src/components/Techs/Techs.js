import React from "react";
import './Techs.scss';

function Techs() {
  return (
    <section className="techs">
      <h2 className="subtitle techs__title">Технологии</h2>
      <div className="techs__main-block">
        <p className="techs__big-text">7 технологий</p>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__list">
          <div className="techs__item">
            <p className="techs__item-text">HTML</p>
          </div>
          <div className="techs__item">
            <p className="techs__item-text">CSS</p>
          </div>
          <div className="techs__item">
            <p className="techs__item-text">JS</p>
          </div>
          <div className="techs__item">
            <p className="techs__item-text">React</p>
          </div>
          <div className="techs__item">
            <p className="techs__item-text">Git</p>
          </div>
          <div className="techs__item">
            <p className="techs__item-text">Express.js</p>
          </div>
          <div className="techs__item">
            <p className="techs__item-text">mongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;