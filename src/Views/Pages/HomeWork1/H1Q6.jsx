import React from "react";
import { GetHomeWorkQuestions } from "../../../Services/APIs/GetHomeWorkQuestions";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer6H1 from "../../../Components/HomeWorks/HomeWork1/Answer6/Answer6H1";
import GetDetailsOfQuestions from "../../../Services/APIs/GetDetailsOfQuestions";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";

class H1Q6 extends React.Component {
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
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.questions !== this.state.questions) {
      this.fetchQuestion();
    }
    if (prevState.question !== this.state.question) {
      this.setIsDataAvailable();
    }
    if (prevState.isDataAvailable !== this.state.isDataAvailable) {
      this.setIsFinished();
    }
  }

  fetchData = async () => {
    const { hId, aId } = this.props;
    const data = await GetHomeWorkQuestions(hId);
    this.setState({ questions: data });
    const details = await GetDetailsOfQuestions(hId * 10 + aId);
    this.setState({ details: details.question6 });
  };

  fetchQuestion = async () => {
    const { questions } = this.state;
    await this.setState({ question: questions[0] });
  };

  setIsDataAvailable = () => {
    this.setState({ isDataAvailable: true });
  };

  setIsFinished = () => {
    setTimeout(() => {
      this.setState({ isFinished: true });
    }, 500);
  };

  render() {
    const { isFinished, details } = this.state;
    const { hId, aId } = this.props;
    return isFinished ? (
      <AnswerMain
        hId={hId}
        aId={aId}
        detail={details}
        children={<Answer6H1 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H1Q6;
