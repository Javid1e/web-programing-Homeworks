import React from "react";
import styles from "./UI/StyleSheet/NotFound.module.css";

/*
    NotFound component is a functional component that renders a page when the user enters a wrong or non-existent address.
    It consists of a heading, two paragraphs, and an animation.
    It is using a stylesheet module for styling.
*/
const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundHeading}>404</h1>
      <p className={styles.notFoundText}>"Oops! Page not found"</p>
      <p className={styles.notFoundDescription}>
        "لطفا آدرس ورودی را بررسی بفرمایید."
      </p>
      <div className={styles.notFoundAnimContainer}>
        <div className={styles.notFoundAnim}></div>
      </div>
    </div>
  );
};
export default NotFound;
