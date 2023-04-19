import React from 'react';
import styleSheet from './StyleSheet/NotFound.module.css';

const NotFound = () => {
  return (
      <div className={styleSheet["not-found-container"]}>
        <h1 className={styleSheet["not-found-heading"]}>404</h1>
        <p className={styleSheet["not-found-text"]}>Oops! Page not found.</p>
          <p className={styleSheet["not-found-description"]}>لطفا آدرس ورودی را بررسی کنید.</p>
        <div className={styleSheet["not-found-anim-container"]}>
          <div className={styleSheet["not-found-anim"]}></div>
        </div>
      </div>
  );
};

export default NotFound;