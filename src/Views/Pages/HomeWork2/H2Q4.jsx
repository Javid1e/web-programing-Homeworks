import React, { Component } from "react";
import AnswerMain from "../../Layouts/AnswerMain";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";
import Answer4H2 from "../../../Components/HomeWorks/HomeWork2/Answer4/Answer4H2";
import { GetQuestionExplains } from "../../../Services/APIs/Details/GetQuestionExplains";
import { GetHomeWorkQuestion } from "../../../Services/APIs/Details/GetHomeWorkQuestion";

class H2Q4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
      question: [],
      details: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData().then(() => {
      setTimeout(() => {
        this.setState({ isFinished: true });
      }, 1000);
    });
  }

  async fetchData() {
    const { hId, aId } = this.props;
    this.setState({ isFinished: false });
    const data = await GetHomeWorkQuestion(hId, aId);
    const details = await GetQuestionExplains(hId, aId);
    this.setState({
      details: details,
      question: data,
    });
  }

  render() {
    const { isFinished, details, question } = this.state;
    const { hId, aId } = this.props;
    return isFinished ? (
      <AnswerMain
        hId={hId}
        aId={aId}
        details={details}
        data={question}
        children={<Answer4H2 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H2Q4;
