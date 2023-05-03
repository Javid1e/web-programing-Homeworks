import axios from "axios";
import { HOMEWORK_2_QUESTION_4_DELETE_PLAYERS_URL } from "../../PersonalAPIConstants";

async function DeleteH2A4Players({ player }) {
  try {
    const response = await axios.delete(
      `${HOMEWORK_2_QUESTION_4_DELETE_PLAYERS_URL}//${player}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework2 Question4 Players For Deleting Player:${player.name} Failed ,Maybe Server Is Down`;
  }
}

export default DeleteH2A4Players;
