import React, { Component } from "react";

import { GetHomeWorkQuestions } from "../../../Services/APIs/GetHomeWorkQuestions";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer7H1 from "../../../Components/HomeWorks/HomeWork1/Answer7/Answer7H1";
import GetDetailsOfQuestions from "../../../Services/APIs/GetDetailsOfQuestions";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";

class H1Q7 extends Component {
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
      this.setState({ details: details.question7 });
    };
    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.questions !== this.state.questions) {
      this.setState({
        isDataAvailable: false,
        isFinished: false,
      });
      const fetchData = async () => {
        await this.setState({ question: this.state.questions[0] });
      };
      fetchData();
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

  render() {
    const { isFinished, details } = this.state;
    return isFinished ? (
      <AnswerMain
        hId={this.props.hId}
        aId={this.props.aId}
        detail={details}
        children={<Answer7H1 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H1Q7;
