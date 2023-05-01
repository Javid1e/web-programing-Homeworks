import React, { useEffect, useState } from "react";
import CustomButton from "../../../../UI/Elements/CustomButton";
import Card from "../../../../UI/Elements/Card";
import styles from "./Answer4.module.css";
import CustomInput from "../../../../UI/Elements/CustomInput";
import CustomP from "../../../../UI/Elements/CustomP";
import GetH1A4Tests from "../../../../Services/APIs/Responses/GetH1A4Tests";

const Answer4H1 = () => {
  const [numQuestions, setNumQuestions] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showStart, setShowStart] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetH1A4Tests().then((item) => {
          if (
            item === "Connecting To Homework1 Tests Failed,Maybe Server Is Down"
          ) {
            setError(item);
          } else {
            setQuestions(item["tests"]);
            setLoading(false);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData().then((r) => {});
  }, [loading]);
  const handleNumQuestionsChange = (event) => {
    setNumQuestions(parseInt(event.target.value));
  };

  const handleStartTest = () => {
    if (loading === false) {
      setStart(true);
      setShowStart(false);
      const selected = [];
      while (selected.length < numQuestions) {
        const index = Math.floor(Math.random() * questions.length);
        if (!selected.includes(index)) {
          selected.push(index);
        }
      }
      setSelectedQuestions(selected);
    }
  };
  const handleReStartTest = () => {
    setShowScore(false);
    setStart(false);
    setShowStart(true);
    setNumQuestions(5);
    setSelectedQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Card isDefault={true}>
      {showStart && (
        <Card isDefault={false}>
          <CustomInput
            min={5}
            max={15}
            type="number"
            value={numQuestions.toString()}
            onChange={handleNumQuestionsChange}
            label={"تعداد سوال"}
            id={"q"}
          />
          <CustomButton
            type={"submit"}
            onClick={handleStartTest}
            className={styles.a4btn}
            children={"شروع آزمون"}
          />
        </Card>
      )}

      {showScore ? (
        <Card isDefault={false}>
          <CustomP
            isMessage={true}
            children={`${"امتیاز شما در این آزمون  "}${score}${" است."}`}
          />
          <CustomButton
            type={"submit"}
            onClick={handleReStartTest}
            children={"آزمون مجدد"}
          />
        </Card>
      ) : start ? (
        <Card isDefault={false}>
          <div className={styles["question-section"]}>
            <div className={styles["question-count"]}>
              <span>
                {"سوال "} {currentQuestion + 1}
              </span>
              /{numQuestions}
            </div>
            <div className={styles["question-text"]}>
              {questions[selectedQuestions[currentQuestion]].questionText}
            </div>
          </div>
          <Card isDefault={false} className={styles["a4container"]}>
            {questions[selectedQuestions[currentQuestion]].answerOptions.map(
              (answerOption) => (
                <CustomButton
                  type={"submit"}
                  className={styles.a4btn}
                  key={answerOption.id}
                  children={answerOption.text}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                />
              )
            )}
          </Card>
        </Card>
      ) : (
        error !== null && (
          <Card isDefault={false}>
            <CustomP isMessage={true} children={error} />
          </Card>
        )
      )}
    </Card>
  );
};

export default Answer4H1;
