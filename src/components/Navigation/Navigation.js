import React from "react";
import './Navigation.scss';
import { Link } from "react-router-dom";

function Navigation() {
  return (
   <div className="navigation">    
    <input id="menu-button" className="navigation__menu-toggle" type="checkbox"/>
    <label for="menu-button" className="navigation__menu-button">
      <span className="navigation__menu-elements"></span>
    </label>
    <div className="navigation__overlay">
      <div className="navigation__link-wrap">
        <Link to="/" className="link navigation__link navigation__link_active">Main</Link>
        <Link to="/movies" className="link navigation__link">Films</Link>
        <Link to="/saved-movies" className="link navigation__link">Saved films</Link>
      </div>
      <Link className="button navigation__profile-button" to="/profile">Profile</Link>
      
    </div>
   </div>
  );
}

export default Navigation;