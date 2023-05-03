import axios from "axios";
import { HOMEWORK_1_QUESTION_7_SOCIAL_MEDIA_URL } from "../../PersonalAPIConstants";

async function GetH1A7SocialMedia() {
  try {
    const response = await axios.get(HOMEWORK_1_QUESTION_7_SOCIAL_MEDIA_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework1 SocialMedia Failed,Maybe Server Is Down";
  }
}

export default GetH1A7SocialMedia;
