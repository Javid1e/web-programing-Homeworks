import axios from "axios";
import { HOMEWORK_1_QUESTION_5_CARS_URL } from "../../PersonalAPIConstants";

async function GetH1A5Cars() {
  try {
    const response = await axios.get(HOMEWORK_1_QUESTION_5_CARS_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework1 Cars Failed,Maybe Server Is Down";
  }
}

export default GetH1A5Cars;
