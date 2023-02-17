import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.scss';

function SavedMovies() {
  return (
    <section className="saved-movies">SavedMovies
      <MoviesCardList/>
    </section>
  );
}

export default SavedMovies;