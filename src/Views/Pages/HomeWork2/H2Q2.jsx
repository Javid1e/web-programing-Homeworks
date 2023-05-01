import React, { Component } from "react";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer2H2 from "../../../Components/HomeWorks/HomeWork2/Answer2/Answer2H2";
import { GetHomeWorkQuestions } from "../../../Services/APIs/Details/GetHomeWorkQuestions";
import GetDetailsOfQuestions from "../../../Services/APIs/GetDetailsOfQuestions";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";

class H2Q2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataAvailable: false,
      isFinished: false,
      question: [],
      questions: [],
      details: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { props } = this;
    this.setState({ isDataAvailable: false, isFinished: false });
    const data = await GetHomeWorkQuestions(props.hId);
    const details = await GetDetailsOfQuestions(props.hId * 10 + props.aId);
    this.setState({
      questions: data,
      details: details.question1,
      question: data[0],
    });
    this.setState({ isDataAvailable: true, isFinished: true });
  }

  render() {
    const { isFinished, details } = this.state;
    return isFinished ? (
      <AnswerMain
        hId={this.props.hId}
        aId={this.props.aId}
        detail={details}
        children={<Answer2H2 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H2Q2;
