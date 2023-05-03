import axios from "axios";
import { HOMEWORK_1_QUESTION_7_PUT_SOCIAL_MEDIA_AUTHORS_URL } from "../../PersonalAPIConstants";

async function PutH1A7AuthorsSocialMedia({ author }) {
  try {
    const response = await axios.post(
      `${HOMEWORK_1_QUESTION_7_PUT_SOCIAL_MEDIA_AUTHORS_URL}//${author}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework1 Question7 Social Media Authors For Updating Author:${author.name} Failed ,Maybe Server Is Down`;
  }
}

export default PutH1A7AuthorsSocialMedia;
