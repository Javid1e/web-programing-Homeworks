import axios from "axios";
import { HOMEWORK_1_QUESTION_4_TESTS_HISTORY_URL } from "../../PersonalAPIConstants";

async function GetH1A4HistoryTests(name) {
  try {
    const response = await axios.get(
      `${HOMEWORK_1_QUESTION_4_TESTS_HISTORY_URL}//${name}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting To Homework1 Question4 Tests History To Get Detail Of Tester:${name} Failed,Maybe Server Is Down`;
  }
}

export default GetH1A4HistoryTests;
