import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.scss';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm/>
      <MoviesCardList/>
    </section>
  );
}

export default SavedMovies;