import React from "react";
import { Outlet } from "react-router-dom";
import { GetHomeWorkQuestions } from "../../Services/APIs/GetHomeWorkQuestions";
import Header from "./Header";
import LoadingComponent from "../../UI/Elements/LoadingComponent";
import Card from "../../UI/Elements/Card";
import CustomP from "../../UI/Elements/CustomP";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      question: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    const id = this.props.id;
    try {
      await GetHomeWorkQuestions(id).then((item) => {
        if (typeof item === "string") {
          this.setState({
            error: item,
          });
        } else {
          this.setState({
            question: item,
            id: id,
          });
        }
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 1000);
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { question, id, loading, error } = this.state;
    return (
      <>
        {loading ? (
          <LoadingComponent />
        ) : error ? (
          <Card
            isDefault={false}
            children={
              <CustomP isMessage={false} id={"error"} children={error} />
            }
          />
        ) : (
          <>
            <Header id={id} />
            <Outlet context={[question]} />
          </>
        )}
      </>
    );
  }
}

export default Main;
