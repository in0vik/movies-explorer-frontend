import React from "react";
import './Register.scss';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="Logo" />
      <h2 className="register__title">Welcome!</h2>
      <form className="register__form">
        <div className="register__form-item">
          <label className="register__form-label">Name</label>
          <input className="register__form-input" type="text" />
          <span className="register__input-error">Something went wrong...</span>
        </div>
        <div className="register__form-item">
          <label className="register__form-label">E-mail</label>
          <input className="register__form-input" type="email" />
          <span className="register__input-error">Something went wrong...</span>
        </div>
        <div className="register__form-item">
          <label className="register__form-label">Password</label>
          <input className="register__form-input" type="password" />
          <span className="register__input-error">Something went wrong...</span>
        </div>
        <button className="button register__form-button">Register</button>
        <p className="register__text">Already registered? <Link className="link register__registration-link" to="/signin">Login</Link></p>
      </form>
    </section>
  );
}

export default Register;