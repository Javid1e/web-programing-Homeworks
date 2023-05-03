import axios from "axios";
import { HOMEWORK_2_QUESTION_1_TESTS_HISTORY_URL } from "../../PersonalAPIConstants";

async function GetH2A1HistoryTests(name) {
  try {
    const response = await axios.get(
      `${HOMEWORK_2_QUESTION_1_TESTS_HISTORY_URL}//${name}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting To Homework2 Question1 Tests History To Get Detail Of Tester:${name} Failed,Maybe Server Is Down`;
  }
}

export default GetH2A1HistoryTests;
