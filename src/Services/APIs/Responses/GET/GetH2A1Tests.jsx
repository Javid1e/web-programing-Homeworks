import axios from "axios";
import { HOMEWORK_2_QUESTION_1_TESTS_URL } from "../../PersonalAPIConstants";

async function GetH2A1Tests() {
  try {
    const response = await axios.get(HOMEWORK_2_QUESTION_1_TESTS_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework2 Tests Failed,Maybe Server Is Down";
  }
}

export default GetH2A1Tests;
