import axios from "axios";

export async function GetHomeWorkQuestions(props) {
  const homeWorkNumber = props;
  try {
    const response = await axios.get(
      `http://localhost:3008/homeWork` + homeWorkNumber + `Questions`
    );
    return response.data[1].questions;
  } catch (error) {
    console.error(error);
    switch (homeWorkNumber) {
      case 1:
        return "Connecting To Homework1 Questions Failed,Maybe Server Is Down";
      case 2:
        return "Connecting To Homework2 Questions Failed,Maybe Server Is Down";
      case 3:
        return "Connecting To Homework3 Questions Failed,Maybe Server Is Down";
    }
  }
}
