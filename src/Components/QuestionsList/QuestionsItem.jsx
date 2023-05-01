import React from "react";
import Card from "../../UI/Elements/Card";
import CustomButton from "../../UI/Elements/CustomButton";
import styles from "./QuestionsItem.module.css";
import { useNavigate } from "react-router-dom";

const QuestionsItem = (props) => {
  const navigate = useNavigate();
  return (
    <li>
      <Card
        isDefault={true}
        className={` ${props.className} ${styles["question-item"]}`}
      >
        <div
          className={` ${props.className} ${styles["question-item__description"]}`}
        >
          <h1>{props.title}</h1>
          <h2>{props.body}</h2>
          <CustomButton
            className={` ${props.className} ${styles["btn"]}`}
            type={"submit"}
            onClick={(e) => {
              e.preventDefault();
              const path = `answers/q${props.route}`;
              navigate(path);
            }}
            children={"نمایش پاسخ"}
          />
        </div>
      </Card>
    </li>
  );
};
export default QuestionsItem;
