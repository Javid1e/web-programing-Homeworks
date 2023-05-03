import axios from "axios";
import { HOMEWORK_1_QUESTION_4_POST_TESTS_HISTORY_URL } from "../../PersonalAPIConstants";

async function PostH1A4HistoryTests({ tester }) {
  try {
    const response = await axios.post(
      `${HOMEWORK_1_QUESTION_4_POST_TESTS_HISTORY_URL}//${tester}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework2 Question1 Tests History For Posting Tester:${tester.name} Failed ,Maybe Server Is Down`;
  }
}

export default PostH1A4HistoryTests;
