import axios from "axios";
import {
  HOMEWORK_1_QUESTIONS_URL,
  HOMEWORK_2_QUESTIONS_URL,
  HOMEWORK_3_QUESTIONS_URL,
} from "../PersonalAPIConstants";

export async function GetHomeWorkQuestions(id) {
  let url;
  switch (id) {
    case 1:
      url = HOMEWORK_1_QUESTIONS_URL;
      break;
    case 2:
      url = HOMEWORK_2_QUESTIONS_URL;
      break;
    case 3:
      url = HOMEWORK_3_QUESTIONS_URL;
      break;
    default:
      url = "";
  }
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return `"Connecting To Homework${id} Questions Failed,Maybe Server Is Down"`;
  }
}
