import axios from "axios";
import { HOMEWORK_1_QUESTION_1_POEMS_URL } from "../../PersonalAPIConstants";

async function GetH1A1Poems() {
  try {
    const response = await axios.get(HOMEWORK_1_QUESTION_1_POEMS_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting Homework1 Question1 Poems Failed ,Maybe Server Is Down";
  }
}

export default GetH1A1Poems;
