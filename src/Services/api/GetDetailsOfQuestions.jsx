import axios from "axios";

async function GetDetailsOfQuestions(props) {
  let details;
  switch (props) {
    case 1:
      details = "homeWork1Questions";
      break;
    case 2:
      details = "homeWork2Questions";
      break;
    case 3:
      details = "homeWork3Questions";
      break;
    case 11:
      details = "homeWork1Poems";
      break;
    case 14:
      details = "homeWork1Tests";
      break;
    case 15:
      details = "homeWork1Cars";
      break;
    case 17:
      details = "homeWork1Posts";
      break;
    case 21:
      details = "homeWork2Tests";
      break;
    case 24:
      details = "homeWork2Player";
      break;
    default:
      details = "";
  }

  try {
    const response = await axios.get(`http://localhost:3008/` + details);
    return response.data[0].details[0];
  } catch (error) {
    console.error(error);
    switch (props) {
      case 1:
        return "Connecting To Homework1 Details Failed,Maybe Server Is Down";
      case 2:
        return "Connecting To Homework2 Details Failed,Maybe Server Is Down";
      case 3:
        return "Connecting To Homework3 Details Failed,Maybe Server Is Down";
      case 11:
        return "Connecting To Homework1 Poems Details Failed,Maybe Server Is Down";
      case 14:
        return "Connecting To Homework1 Tests Details Failed,Maybe Server Is Down";
      case 15:
        return "Connecting To Homework1 Cars Details Failed,Maybe Server Is Down";
      case 17:
        return "Connecting To Homework1 Posts Details Failed,Maybe Server Is Down";
      case 21:
        return "Connecting To Homework2 Tests Details Failed,Maybe Server Is Down";
      case 24:
        return "Connecting To Homework1 Players Details Failed,Maybe Server Is Down";
      default:
        return "Maybe Server Is Down";
    }
  }
}
export default GetDetailsOfQuestions;
