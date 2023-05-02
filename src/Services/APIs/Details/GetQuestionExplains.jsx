import axios from "axios";
import {
  HOMEWORK_1_QUESTION_DETAILS_URL,
  HOMEWORK_2_QUESTION_DETAILS_URL,
  HOMEWORK_3_QUESTION_DETAILS_URL,
} from "../PersonalAPIConstants";

export async function GetQuestionExplains(hId, aId) {
  let url;
  switch (hId) {
    case 1:
      url = HOMEWORK_1_QUESTION_DETAILS_URL;
      break;
    case 2:
      url = HOMEWORK_2_QUESTION_DETAILS_URL;
      break;
    case 3:
      url = HOMEWORK_3_QUESTION_DETAILS_URL;
      break;
    default:
      url = "";
  }
  try {
    const response = await axios.get(`${url}\\${aId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return `"Connecting To Homework${hId} Question${aId} Explains Failed,Maybe Server Is Down"`;
  }
}
