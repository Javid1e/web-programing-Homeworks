import React, { Component } from "react";
import { GetHomeWorkQuestions } from "../../../Services/APIs/GetHomeWorkQuestions";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer3H1 from "../../../Components/HomeWorks/HomeWork1/Answer3/Answer3H1";
import GetDetailsOfQuestions from "../../../Services/APIs/GetDetailsOfQuestions";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";

class H1Q3 extends Component {
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

  async componentDidMount() {
    this.setState({
      isDataAvailable: false,
      isFinished: false,
    });
    const data = await GetHomeWorkQuestions(this.props.hId);
    this.setState({
      questions: data,
    });
    const details = await GetDetailsOfQuestions(
      this.props.hId * 10 + this.props.aId
    );
    this.setState({
      details: details.question3,
    });
    await this.fetchData();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.questions !== this.state.questions) {
      await this.setState({ question: this.state.questions[0] });
    }
    if (prevState.question !== this.state.question) {
      this.setState({
        isDataAvailable: true,
        isFinished: false,
      });
    }
    if (prevState.isDataAvailable !== this.state.isDataAvailable) {
      setTimeout(() => {
        this.setState({ isFinished: true });
      }, 500);
    }
  }

  async fetchData() {
    const data = await GetHomeWorkQuestions(this.props.hId);
    this.setState({
      questions: data,
    });
  }

  render() {
    return this.state.isFinished ? (
      <AnswerMain
        hId={this.props.hId}
        aId={this.props.aId}
        detail={this.state.details}
        children={<Answer3H1 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H1Q3;
