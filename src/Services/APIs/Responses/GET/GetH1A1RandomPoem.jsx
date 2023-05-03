import axios from "axios";
import { HOMEWORK_1_QUESTION_1_RANDOM_POEMS_URL } from "../../PersonalAPIConstants";

async function GetH1A1RandomPoem() {
  try {
    const response = await axios.get(HOMEWORK_1_QUESTION_1_RANDOM_POEMS_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting Homework1 Question1 Random Poem Failed ,Maybe Server Is Down";
  }
}

export default GetH1A1RandomPoem;
