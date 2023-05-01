import React, { Component } from "react";
import { GetHomeWorkQuestions } from "../../../Services/APIs/GetHomeWorkQuestions";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer4H1 from "../../../Components/HomeWorks/HomeWork1/Answer4/Answer4H1";
import GetDetailsOfQuestions from "../../../Services/APIs/GetDetailsOfQuestions";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";

class H1Q4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDataAvailable: false,
      isFinished: false,
      question: [],
      questions: [],
      details: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const data = await GetHomeWorkQuestions(this.props.hId);
      this.setState({ questions: data }, async () => {
        const details = await GetDetailsOfQuestions(
          this.props.hId * 10 + this.props.aId
        );
        this.setState({ details: details.question4 }, () => {
          this.fetchQuestionData();
        });
      });
    };

    this.setState({
      isDataAvailable: false,
      isFinished: false,
    });
    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.questions !== prevState.questions) {
      this.fetchQuestionData();
    }
  }

  fetchQuestionData = async () => {
    const { questions } = this.state;
    const question = questions[0];
    this.setState(
      {
        question,
        isDataAvailable: true,
        isFinished: false,
      },
      () => {
        setTimeout(() => {
          this.setState({ isFinished: true });
        }, 500);
      }
    );
  };

  render() {
    const { isFinished, details } = this.state;

    return isFinished ? (
      <AnswerMain
        hId={this.props.hId}
        aId={this.props.aId}
        detail={details}
        children={<Answer4H1 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H1Q4;
