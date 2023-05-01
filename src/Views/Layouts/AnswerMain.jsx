import React, { useEffect, useState } from "react";
import Card from "../../UI/Elements/Card";
import StyleSheet from "./UI/StyleSheet/AnswerMain.module.css";
import { GetHomeWorkQuestions } from "../../Services/APIs/Details/GetHomeWorkQuestions";
import CustomList from "../../UI/List/CustomList";
import CustomP from "../../UI/Elements/CustomP";
import LoadingComponent from "../../UI/Elements/LoadingComponent";

const AnswerMain = (props) => {
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [question, setQuestion] = useState();
  const [questionTittle, setQuestionTittle] = useState();
  useEffect(() => {
    setIsDataAvailable(false);
    const fetchData = async () => {
      const data = await GetHomeWorkQuestions(props.hId);
      data.map((item) => {
        if (props.aId === item.id) {
          setQuestionTittle(item.title);
          setQuestion(item.body);
        }
      });
      setTimeout(() => {
        setIsDataAvailable(true);
      }, 1000);
    };

    fetchData().then((r) => {});
  }, [question]);
  return isDataAvailable ? (
    <Card
      isDefault={true}
      className={` ${props.className} ${StyleSheet["main"]}`}
    >
      <Card
        isDefault={false}
        className={` ${props.className} ${StyleSheet["question-item"]}`}
      >
        <div
          className={` ${props.className} ${StyleSheet["question-item__description"]}`}
        >
          <h1>{questionTittle}</h1>
          <h2>{question}</h2>
        </div>
      </Card>
      <Card isDefault={false} className={` ${props.className} }`}>
        <Card isDefault={true}>
          <CustomList
            data={props.detail}
            renderItem={(item) => (
              <CustomP isMessage={true} key={item.id}>
                {item.title}
              </CustomP>
            )}
          ></CustomList>
          <CustomList
            data={props.detail}
            renderItem={(item) => (
              <CustomP isMessage={true} key={item.id}>
                {item.description}
              </CustomP>
            )}
          ></CustomList>
          <CustomList
            data={props.detail[0].facts}
            renderItem={(item) => (
              <CustomP isMessage={true} key={item.id}>
                {item.title}
              </CustomP>
            )}
          ></CustomList>
        </Card>
        {props.children}
      </Card>
    </Card>
  ) : (
    <LoadingComponent />
  );
};
export default AnswerMain;
