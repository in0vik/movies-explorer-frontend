import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.scss';

function SearchForm() {
  return (
    <>
      <section className="search-form">
        <form className="search-form__form">
          <input className="search-form__input" type="text" placeholder="Film"/>
          <button className="button search-form__button"></button>
          <div className="search-form__separator"></div>
          <FilterCheckbox/>
        </form>
      </section>
    </>
  );
}

export default SearchForm;