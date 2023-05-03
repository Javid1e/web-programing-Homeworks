import axios from "axios";
import { HOMEWORK_2_QUESTION_4_PLAYERS_URL } from "../../PersonalAPIConstants";

async function GetH2A4Players() {
  try {
    const response = await axios.get(HOMEWORK_2_QUESTION_4_PLAYERS_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework2 Players Failed,Maybe Server Is Down";
  }
}

export default GetH2A4Players;
