import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.scss';

function MoviesCardList() {
  return (
    <section className="movies-card-list"> 
      <div className="movies-card-list__wrap">
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </div>
      <button className="button movies-card-list__more-button">More</button>
    </section>
  );
}

export default MoviesCardList;