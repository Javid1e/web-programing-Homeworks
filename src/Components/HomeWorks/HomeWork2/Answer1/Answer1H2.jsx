import React from "react";
import GetH2A1Tests from "../../../../Services/APIs/GetH2A1Tests";
import CustomButton from "../../../../UI/Elements/CustomButton";
import Card from "../../../../UI/Elements/Card";
import styles from "../../HomeWork1/Answer4/Answer4.module.css";
import CustomP from "../../../../UI/Elements/CustomP";
import Timer from "./Components/Timer";
import LoadingComponent from "../../../../UI/Elements/LoadingComponent";

class Answer1H2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      randomQuestions: [],
      currentQuestion: 0,
      loading: true,
      loadingError: "",
      start: true,
      showQuestions: false,
      resetTimer: false,
      currentQuestionTime: 0,
      usedTime: 0,
      score: 0,
      showResult: false,
    };
  }

  fetchData = async () => {
    try {
      await GetH2A1Tests().then((item) => {
        if (typeof item === "string") {
          this.setState({ loadingError: item });
        } else {
          this.setState({ questions: item[0]["tests"] });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchData().then(() => {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    });
  }

  generateRandomArray = () => {
    let arr = [];
    let num0to2 = [];
    let num3to5 = [];
    let num6to8 = [];
    let num9to11 = [];
    let num12to14 = [];

    // fill the first 3 elements with numbers 0-2
    while (num0to2.length < 3) {
      let randomNumber = Math.floor(Math.random() * 3);
      if (!num0to2.includes(randomNumber)) {
        num0to2.push(randomNumber);
      }
    }
    arr = [...num0to2];

    // fill the next 3 elements with numbers 3-5
    while (num3to5.length < 3) {
      let randomNumber = Math.floor(Math.random() * 3) + 3;
      if (!num3to5.includes(randomNumber)) {
        num3to5.push(randomNumber);
      }
    }
    arr = [...arr, ...num3to5];

    // fill the next 3 elements with numbers 6-8
    while (num6to8.length < 3) {
      let randomNumber = Math.floor(Math.random() * 3) + 6;
      if (!num6to8.includes(randomNumber)) {
        num6to8.push(randomNumber);
      }
    }
    arr = [...arr, ...num6to8];

    // fill the next 3 elements with numbers 9-11
    while (num9to11.length < 3) {
      let randomNumber = Math.floor(Math.random() * 3) + 9;
      if (!num9to11.includes(randomNumber)) {
        num9to11.push(randomNumber);
      }
    }
    arr = [...arr, ...num9to11];

    // fill the next 3 elements with numbers 12-14
    while (num12to14.length < 3) {
      let randomNumber = Math.floor(Math.random() * 3) + 12;
      if (!num12to14.includes(randomNumber)) {
        num12to14.push(randomNumber);
      }
    }
    arr = [...arr, ...num12to14];
    return arr;
  };

  handleStartTest = () => {
    const randomArray = this.generateRandomArray();
    this.setState({ randomQuestions: randomArray });
    this.setState({
      start: false,
      showQuestions: true,
      currentQuestionTime: 5,
    });
  };

  handleReStartTest = () => {
    setTimeout(() => {
      this.setState({
        showResult: false,
        start: true,
        showQuestion: false,
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        randomQuestions: [],
        currentQuestionTime: 5,
        currentQuestion: 0,
        usedTime: 0,
        score: 0,
      });
    }, 1000);
  };
  handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      this.setState({ score: this.state.score + 1, resetTimer: true });
      const nextQuestion = this.state.currentQuestion + 1;
      if (nextQuestion < this.state.randomQuestions.length) {
        this.setState({ currentQuestion: nextQuestion });
      } else {
        this.setState({ showResult: true, resetTimer: false });
      }
    } else {
      this.setState({ showResult: true, resetTimer: false });
    }
  };
  handleTimeUp = () => {
    const { currentQuestion, questions, randomQuestions } = this.state;

    if (currentQuestion === 14) {
      this.setState({ showResult: true });
    }
  };

  render() {
    const {
      questions,
      currentQuestion,
      loading,
      randomQuestions,
      loadingError,
      start,
      showQuestions,
      showResult,
      score,
      currentQuestionTime,
      resetTimer,
    } = this.state;
    return (
      <>
        {loading ? (
          <LoadingComponent />
        ) : loadingError ? (
          <Card isDefault={true}>
            <Card isDefault={false}>
              <CustomP isMessage={false} id={"error"} children={loadingError} />
            </Card>
          </Card>
        ) : start ? (
          <Card isDefault={true}>
            <Card isDefault={false}>
              <CustomButton
                type={"submit"}
                children={"شروع آزمون"}
                onClick={this.handleStartTest.bind()}
              />
            </Card>
          </Card>
        ) : showResult ? (
          <Card isDefault={false}>
            <CustomP
              isMessage={true}
              children={`${"امتیاز شما در این آزمون  "}${score}${" است."}`}
            />
            <Timer showResult={true} />
            <CustomButton
              type={"submit"}
              onClick={this.handleReStartTest.bind()}
              children={"آزمون مجدد"}
            />
          </Card>
        ) : (
          showQuestions && (
            <Card isDefault={true}>
              <Card isDefault={false}>
                <div className={styles["question-section"]}>
                  <div className={styles["question-count"]}>
                    <span>
                      {"سوال "} {currentQuestion + 1}
                    </span>
                    /{15}
                  </div>
                  <div className={styles["question-text"]}>
                    {questions[randomQuestions[currentQuestion]].questionText}
                  </div>
                </div>
              </Card>
              <Card isDefault={false} className={styles["a4container"]}>
                {questions[randomQuestions[currentQuestion]].answerOptions.map(
                  (answerOption) => (
                    <CustomButton
                      type={"submit"}
                      key={answerOption.id}
                      children={answerOption.answerText}
                      onClick={() => {
                        this.handleAnswerOptionClick(answerOption.isCorrect);
                      }}
                    />
                  )
                )}
              </Card>
              <Card isDefault={false}>
                <Timer
                  showResult={false}
                  Key={questions[randomQuestions[currentQuestion]].id}
                  resetTimer={resetTimer}
                  time={
                    questions[randomQuestions[currentQuestion]].answeringTime
                  }
                  onTimeUp={this.handleTimeUp.bind()}
                />
              </Card>
            </Card>
          )
        )}
      </>
    );
  }
}

export default Answer1H2;
