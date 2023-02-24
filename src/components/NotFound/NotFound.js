import React from "react";
import './NotFound.scss';

function NotFound() {
  return (
      <div className="not-found">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Page not found</p>
        <button className="button not-found__button">Back</button>
      </div>
  );
}

export default NotFound;