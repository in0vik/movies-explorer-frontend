import React from "react";
import './AboutProject.scss';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="subtitle about-project__title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__description-item">
          <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description-item">
          <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__timeline">
        <p className="about-project__timeline-item about-project__timeline-item_type_first-part">1 неделя</p>
        <p className="about-project__timeline-item about-project__timeline-item_type_second-part">4 недели</p>
        <p className="about-project__timeline-item about-project__timeline-item_type_description">Back-end</p>
        <p className="about-project__timeline-item about-project__timeline-item_type_description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;