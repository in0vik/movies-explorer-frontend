import React from 'react';
import './FilterCheckbox.scss';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox__wrap'>
      <label className="filter-checkbox">
        <input className="filter-checkbox__input" type="checkbox"></input>
        <span className="filter-checkbox__slider"></span>
      </label>
      <span className="filter-checkbox__name">Short films</span>
    </div>
  );
}

export default FilterCheckbox;
