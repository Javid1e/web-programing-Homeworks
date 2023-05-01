import axios from "axios";
import { HOMEWORKS_DETAILS_URL } from "../PersonalAPIConstants";

async function GetHomeWorksDetails() {
  try {
    const response = await axios.get(HOMEWORKS_DETAILS_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homeworks Details Failed,Maybe Server Is Down";
  }
}

export default GetHomeWorksDetails;
