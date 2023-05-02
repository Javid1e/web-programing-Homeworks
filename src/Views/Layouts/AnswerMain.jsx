import React, { useEffect, useState } from "react";
import Card from "../../UI/Elements/Card";
import StyleSheet from "./UI/StyleSheet/AnswerMain.module.css";
import CustomList from "../../UI/List/CustomList";
import CustomP from "../../UI/Elements/CustomP";
import LoadingComponent from "../../UI/Elements/LoadingComponent";
import CustomListItem from "../../UI/List/CustomListItem";

const AnswerMain = (props) => {
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [question, setQuestion] = useState();
  const [questionTittle, setQuestionTittle] = useState();
  const [details, setDetails] = useState();
  useEffect(() => {
    setIsDataAvailable(false);
    const fetchData = async () => {
      const data = await props.data;
      const details = await props.details;
      setQuestionTittle(data.title);
      setQuestion(data.body);
      setDetails(details);
    };

    fetchData().then((r) => {
      setTimeout(() => {
        setIsDataAvailable(true);
      }, 1000);
    });
  }, [details]);
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
          <CustomListItem>
            <CustomP isMessage={true}>{details.title}</CustomP>
          </CustomListItem>
          <CustomListItem>
            <CustomP isMessage={true}>{details.description}</CustomP>
          </CustomListItem>
          <CustomList
            data={details.facts}
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
