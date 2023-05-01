import React from "react";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer5H1 from "../../../Components/HomeWorks/HomeWork1/Answer5/Answer5H1";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";
import { GetHomeWorkQuestions } from "../../../Services/APIs/Details/GetHomeWorkQuestions";
import GetDetailsOfQuestions from "../../../Services/APIs/GetDetailsOfQuestions";

class H1Q5 extends React.Component {
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
    const { questions } = this.state;
    const { hId, aId } = this.props;
    this.setState({
      setIsDataAvailable: false,
      setIsFinished: false,
    });
    const fetchData = async () => {
      const data = await GetHomeWorkQuestions(hId);
      this.setState({ questions: data });
      const details = await GetDetailsOfQuestions(hId * 10 + aId);
      this.setState({ details: details.question5 });
      this.setState({ question: questions[0] });
    };
    fetchData();
    this.setState({
      setIsDataAvailable: true,
      setIsFinished: true,
    });
  }

  render() {
    const { details, isFinished } = this.state;
    const { hId, aId } = this.props;
    return isFinished ? (
      <AnswerMain
        hId={hId}
        aId={aId}
        detail={details}
        children={<Answer5H1 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H1Q5;
