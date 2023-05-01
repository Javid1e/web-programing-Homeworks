import React, { Component } from "react";
import AnswerMain from "../../Layouts/AnswerMain";
import { GetHomeWorkQuestions } from "../../../Services/APIs/Details/GetHomeWorkQuestions";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";
import Answer3H2 from "../../../Components/HomeWorks/HomeWork2/Answer3/Answer3H2";
import { GetQuestionExplains } from "../../../Services/APIs/Details/GetQuestionExplains";

class H2Q3 extends Component {
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
    const { hId, aId } = this.props;
    this.setState({ isDataAvailable: false, isFinished: false });
    const data = await GetHomeWorkQuestions(hId);
    const details = await GetQuestionExplains(hId, aId);
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
        children={<Answer3H2 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H2Q3;
