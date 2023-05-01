import axios from "axios";

async function GetDetailsOfQuestions(props) {
  let details;
  switch (props) {
    case 11:
      details = "homeWork1Details";
      break;
    case 12:
      details = "homeWork1Details";
      break;
    case 13:
      details = "homeWork1Details";
      break;
    case 14:
      details = "homeWork1Details";
      break;
    case 15:
      details = "homeWork1Details";
      break;
    case 16:
      details = "homeWork1Details";
      break;
    case 17:
      details = "homeWork1Details";
      break;
    case 18:
      details = "homeWork1Details";
      break;
    case 21:
      details = "homeWork2Details";
      break;
    case 22:
      details = "homeWork2Details";
      break;
    case 23:
      details = "homeWork2Details";
      break;
    case 24:
      details = "homeWork2Details";
      break;
    default:
      details = "";
  }

  try {
    const response = await axios.get(`http://localhost:3008/` + details);
    return response.data[0];
  } catch (error) {
    console.error(error);
    switch (props) {
      case 11:
        return "Connecting To Homework1 Question1 Details Failed,Maybe Server Is Down";
      case 12:
        return "Connecting To Homework1 Question2 Details Failed,Maybe Server Is Down";
      case 13:
        return "Connecting To Homework1 Question3 Details Failed,Maybe Server Is Down";
      case 14:
        return "Connecting To Homework1 Question4 Details Failed,Maybe Server Is Down";
      case 15:
        return "Connecting To Homework1 Question5 Details Failed,Maybe Server Is Down";
      case 16:
        return "Connecting To Homework1 Question6 Details Failed,Maybe Server Is Down";
      case 17:
        return "Connecting To Homework1 Question7 Details Failed,Maybe Server Is Down";
      case 18:
        return "Connecting To Homework1 Question8 Details Failed,Maybe Server Is Down";
      case 21:
        return "Connecting To Homework2 Question1 Details Failed,Maybe Server Is Down";
      case 22:
        return "Connecting To Homework2 Question2 Details Failed,Maybe Server Is Down";
      case 23:
        return "Connecting To Homework2 Question3 Details Failed,Maybe Server Is Down";
      case 24:
        return "Connecting To Homework2 Question4 Details Failed,Maybe Server Is Down";
      default:
        return "Maybe Server Is Down";
    }
  }
}
export default GetDetailsOfQuestions;
