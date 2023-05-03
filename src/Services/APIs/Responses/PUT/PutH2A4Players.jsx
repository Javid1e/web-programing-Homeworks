import axios from "axios";
import { HOMEWORK_2_QUESTION_4_PUT_PLAYERS_URL } from "../../PersonalAPIConstants";

async function PutH2A4Players({ player }) {
  try {
    const response = await axios.post(
      `${HOMEWORK_2_QUESTION_4_PUT_PLAYERS_URL}//${player}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework2 Question4 players For Updating Player:${player.name} Failed ,Maybe Server Is Down`;
  }
}

export default PutH2A4Players;
