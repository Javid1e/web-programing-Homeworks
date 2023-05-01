import React, { Component } from "react";

import { GetHomeWorkQuestions } from "../../../Services/APIs/GetHomeWorkQuestions";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer2H1 from "../../../Components/HomeWorks/HomeWork1/Answer2/Answer2H1";
import GetDetailsOfQuestions from "../../../Services/APIs/GetDetailsOfQuestions";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";

class H1Q2 extends Component {
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
    this.setState({
      isDataAvailable: false,
      isFinished: false,
    });
    const fetchData = async () => {
      const data = await GetHomeWorkQuestions(this.props.hId);
      this.setState({ questions: data });
      const details = await GetDetailsOfQuestions(
        this.props.hId * 10 + this.props.aId
      );
      this.setState({ details: details.question2 });
    };
    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.questions !== prevState.questions) {
      this.setState({
        isDataAvailable: false,
        isFinished: false,
      });
      const fetchData = async () => {
        await this.setState({ question: this.state.questions[0] });
      };
      fetchData();
    }
    if (this.state.question !== prevState.question) {
      this.setState({
        isDataAvailable: true,
        isFinished: false,
      });
      setTimeout(() => {
        this.setState({ isFinished: true });
      }, 500);
    }
  }

  render() {
    return this.state.isFinished ? (
      <AnswerMain
        hId={this.props.hId}
        aId={this.props.aId}
        detail={this.state.details}
        children={<Answer2H1 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H1Q2;
