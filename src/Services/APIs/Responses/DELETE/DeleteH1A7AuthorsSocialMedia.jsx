import axios from "axios";
import { HOMEWORK_1_QUESTION_7_DELETE_SOCIAL_MEDIA_AUTHORS_URL } from "../../PersonalAPIConstants";

async function DeleteH1A7AuthorsSocialMedia({ author }) {
  try {
    const response = await axios.delete(
      `${HOMEWORK_1_QUESTION_7_DELETE_SOCIAL_MEDIA_AUTHORS_URL}//${author}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework1 Question7 Social Media For Deleting Author:${author.name} Failed ,Maybe Server Is Down`;
  }
}

export default DeleteH1A7AuthorsSocialMedia;
