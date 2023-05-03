import axios from "axios";
import { HOMEWORK_1_QUESTION_4_DELETE_TESTS_HISTORY_URL } from "../../PersonalAPIConstants";

async function DeleteH1A4HistoryTests({ tester }) {
  try {
    const response = await axios.delete(
      `${HOMEWORK_1_QUESTION_4_DELETE_TESTS_HISTORY_URL}//${tester}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework1 Question4 History Tests For Deleting Tester:${tester.name} Failed ,Maybe Server Is Down`;
  }
}

export default DeleteH1A4HistoryTests;
