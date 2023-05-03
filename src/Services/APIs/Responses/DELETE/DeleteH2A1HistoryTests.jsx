import axios from "axios";
import { HOMEWORK_2_QUESTION_1_DELETE_TESTS_HISTORY_URL } from "../../PersonalAPIConstants";

async function DeleteH2A1HistoryTests({ tester }) {
  try {
    const response = await axios.delete(
      `${HOMEWORK_2_QUESTION_1_DELETE_TESTS_HISTORY_URL}//${tester}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework2 Question1 Tests For Deleting Tester:${tester.name} Failed ,Maybe Server Is Down`;
  }
}

export default DeleteH2A1HistoryTests;
