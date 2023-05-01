import React, { Component } from "react";
import { GetHomeWorkQuestions } from "../../../Services/APIs/Details/GetHomeWorkQuestions";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer4H1 from "../../../Components/HomeWorks/HomeWork1/Answer4/Answer4H1";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";
import { GetQuestionExplains } from "../../../Services/APIs/Details/GetQuestionExplains";

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
      const { hId, aId } = this.props;
      const data = await GetHomeWorkQuestions(hId);
      this.setState({ questions: data }, async () => {
        const details = await GetQuestionExplains(hId, aId);
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
