import React from "react";
import './MoviesCard.scss';

function MoviesCard() {
  const [isYourMovie, setYourMovie] = React.useState(false); // temp
  return (
    <section className="movies-card">
      <div className="movies-card__info-wrap">
        <p className="movies-card__title">33 words about design</p>
        <p className="movies-card__duration">1:47</p>
        <button className={`movies-card__button ${!isYourMovie ? ("movies-card__save-button") : ("movies-card__delete-button")}`}></button>
      </div>
      <img className="movies-card__image" src="https://i.postimg.cc/sX67s7pf/Screenshot-2023-02-17-at-22-51-04-copy-Medium.jpg" alt="Movie"/>
    </section>
  );
}

export default MoviesCard;