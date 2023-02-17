import React from "react";
import './AboutMe.scss';
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="subtitle about-me__title">Студент</h2>
      <div className="about-me__main-block">
          <p className="about-me__name">Илья Новик</p>
          <p className="about-me__job">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Link className="link about-me__github" to="https://github.com/in0vik" >Github</Link>
          <img className="about-me__photo" src="https://i.postimg.cc/kMKm4pqk/Untitled-1.jpg" alt="Фото Студента" />

      </div>
    </section>
  );
}

export default AboutMe;