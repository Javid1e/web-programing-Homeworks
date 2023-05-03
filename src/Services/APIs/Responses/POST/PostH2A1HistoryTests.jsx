import axios from "axios";
import { HOMEWORK_2_QUESTION_1_POST_TESTS_HISTORY_URL } from "../../PersonalAPIConstants";

async function PostH2A1HistoryTests({ tester }) {
  try {
    const response = await axios.post(
      `${HOMEWORK_2_QUESTION_1_POST_TESTS_HISTORY_URL}//${tester}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework2 Question1 Tests History For Posting Tester:${tester.name} Failed ,Maybe Server Is Down`;
  }
}

export default PostH2A1HistoryTests;
