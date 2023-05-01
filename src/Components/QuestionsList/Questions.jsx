import React from "react";
import styles from "./Questions.module.css";
import Card from "../../UI/Elements/Card";
import QuestionsList from "./QuestionsList";

const Questions = (props) => {
  return (
    <Card
      isDefault={false}
      className={` ${props.className} ${styles.questions}`}
      children={<QuestionsList items={props.items} />}
    />
  );
};
export default Questions;
