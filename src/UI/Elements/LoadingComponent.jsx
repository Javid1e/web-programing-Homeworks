import React from "react";
import styles from "./StyleSheets/LoadingComponent.module.css";

const LoadingComponent = () => {
  const balls = Array.from({ length: 3 }, (_, i) => (
    <div key={i} className={styles.loadingBall}></div>
  ));
  return (
    <div className={styles.loadingComponent}>
      <div className={styles.loadingContainer}>{balls}</div>
    </div>
  );
};

export default LoadingComponent;
