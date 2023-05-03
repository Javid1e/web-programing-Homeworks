import axios from "axios";
import { HOMEWORK_1_QUESTION_4_TESTS_URL } from "../../PersonalAPIConstants";

async function GetH1A4Tests() {
  try {
    const response = await axios.get(HOMEWORK_1_QUESTION_4_TESTS_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework1 Tests Failed,Maybe Server Is Down";
  }
}

export default GetH1A4Tests;
