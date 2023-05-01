import React, { Component } from "react";
import { GetHomeWorkQuestions } from "../../../Services/APIs/Details/GetHomeWorkQuestions";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer8H1 from "../../../Components/HomeWorks/HomeWork1/Answer8/Answer8H1";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";
import { GetQuestionExplains } from "../../../Services/APIs/Details/GetQuestionExplains";

class H1Q8 extends Component {
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

  fetchData = async () => {
    const { hId, aId } = this.props;
    const data = await GetHomeWorkQuestions(hId);
    this.setState({ questions: data });
    const details = await GetQuestionExplains(hId, aId);
    this.setState({ details: details.question8 });
  };

  componentDidMount() {
    this.setState({ isDataAvailable: false });
    this.setState({ isFinished: false });
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.questions !== this.state.questions) {
      this.setState({ isDataAvailable: false });
      this.setState({ isFinished: false });
      const fetchData = async () => {
        await this.setState({ question: this.state.questions[0] });
      };
      fetchData();
    }
    if (prevState.question !== this.state.question) {
      this.setState({ isDataAvailable: true });
      this.setState({ isFinished: false });
    }
    if (prevState.isDataAvailable !== this.state.isDataAvailable) {
      this.setState({ isFinished: true });
    }
  }

  render() {
    return this.state.isFinished ? (
      <AnswerMain
        hId={this.props.hId}
        aId={this.props.aId}
        detail={this.state.details}
        children={<Answer8H1 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H1Q8;
