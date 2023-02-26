import React from "react";
import './Login.scss';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="login">
      <img className="login__logo" src={logo} alt="Logo" />
      <h2 className="login__title">Good to see you!</h2>
      <form className="login__form">
        <div className="login__form-item">
          <label className="login__form-label">E-mail</label>
          <input className="login__form-input" type="email" />
        </div>
        <div className="login__form-item">
          <label className="login__form-label">Password</label>
          <input className="login__form-input" type="password" />
        </div>
        <button className="button login__form-button">Log in</button>
        <p className="login__text">Not registered yet? <Link className="link login__registration-link" to="/signup">Registration</Link></p>
      </form>
    </section>
  );
}

export default Login;