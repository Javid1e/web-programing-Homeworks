import React from "react";
import styles from "./QuestionsList.module.css";
import QuestionsItem from "./QuestionsItem";
import CustomLabel from "../../UI/Elements/CustomLabel";

const QuestionsList = (props) => {
  if (props.items.length === 0) {
    return (
      <CustomLabel
        type={"AlertLabel"}
        isHeader={false}
        htmlFor={"error"}
        className={`~${props.className} ${styles["questions-list__fallback"]}`}
        children={"هیچ سوالی یافت نشد."}
      />
    );
  }

  return (
    <ul className={` ${props.className} ${styles["questions-list"]}`}>
      {props.items.map((question) => (
        <QuestionsItem
          route={question.route}
          key={question.id}
          title={question.title}
          body={question.body}
        />
      ))}
    </ul>
  );
};
export default QuestionsList;
