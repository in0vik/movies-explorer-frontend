import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <Link className='header__logo' to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="header__navigation">
        <ul className="header__navigation-list header__navigation-list_type_profile">
          <li className="header__navigation-item">
            <Link className="navigation__link link" to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="header__navigation-item">
            <Link className="navigation__link link" to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <ul className="header__navigation-list header__navigation-list_type_main-nav">
          <li className="header__registration-button">
            <Link className="header__navigation-link  link" to="/movies">
              Регистрация
            </Link>
          </li>
          <li className="header__login-button">
            <Link className="header__navigation-link link" to="/saved-movies">
              Войти
            </Link>
          </li>
          <li className="header__profile-button">
            <Link className="header__navigation-link link" to="/profile">
              Аккаунт
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
