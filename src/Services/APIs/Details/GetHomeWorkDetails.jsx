import axios from "axios";
import {
  HOMEWORK_1_DETAILS_URL,
  HOMEWORK_2_DETAILS_URL,
  HOMEWORK_3_DETAILS_URL,
} from "../PersonalAPIConstants";

async function GetHomeWorkDetails(id) {
  let url;
  switch (id) {
    case 1:
      url = HOMEWORK_1_DETAILS_URL;
      break;
    case 2:
      url = HOMEWORK_2_DETAILS_URL;
      break;
    case 3:
      url = HOMEWORK_3_DETAILS_URL;
      break;
    default:
      url = "";
  }
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return `"Connecting To Homework ${id} Details Failed,Maybe Server Is Down"`;
  }
}

export default GetHomeWorkDetails;
