import React from "react";
import './Profile.scss';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__greating">Hello, Ilya!</h2>
      <div className="profile__info">
        <div className="profile__info-item">
          <p className="profile__info-item-title">Name</p>
          <p className="profile__info-item-value">Ilya</p>
        </div>
        <div className="profile__info-item">
          <p className="profile__info-item-title">E-mail</p>
          <p className="profile__info-item-value">ilya.novikk@gmail.com</p>
        </div>
      </div>
      <button className="link button profile__edit-button">Edit</button>
      <button className="link button profile__logout-button">Log out</button>
    </section>
  );
}

export default Profile;