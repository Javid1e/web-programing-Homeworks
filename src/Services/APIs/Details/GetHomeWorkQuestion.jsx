import axios from "axios";
import {
  HOMEWORK_1_QUESTION_URL,
  HOMEWORK_2_QUESTION_URL,
  HOMEWORK_3_QUESTION_URL,
} from "../PersonalAPIConstants";

export async function GetHomeWorkQuestion(hId, aId) {
  let url;
  switch (hId) {
    case 1:
      url = HOMEWORK_1_QUESTION_URL;
      break;
    case 2:
      url = HOMEWORK_2_QUESTION_URL;
      break;
    case 3:
      url = HOMEWORK_3_QUESTION_URL;
      break;
    default:
      url = "";
  }
  try {
    const response = await axios.get(`${url}\\${aId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return `"Connecting To Homework${hId} Question${aId} Failed,Maybe Server Is Down"`;
  }
}
