import React from "react";
import './NavTab.scss';
import { Link } from "react-router-dom";

function NavTab() {
  return (
      <div className="nav-tab">
        <Link className="button nav-tab__button" to="/">О проекте</Link>
        <Link className="button nav-tab__button" to="/">Технологии</Link>
        <Link className="button nav-tab__button" to="/">Студент</Link>
      </div>
  );
}

export default NavTab;