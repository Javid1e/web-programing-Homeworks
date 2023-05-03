import axios from "axios";
import { HOMEWORK_1_QUESTION_4_PUT_TESTS_HISTORY_URL } from "../../PersonalAPIConstants";

async function PutH1A4HistoryTests({ tester }) {
  try {
    const response = await axios.post(
      `${HOMEWORK_1_QUESTION_4_PUT_TESTS_HISTORY_URL}//${tester}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework1 Question4 Tests History For Updating Tester:${tester.name} Failed ,Maybe Server Is Down`;
  }
}

export default PutH1A4HistoryTests;
