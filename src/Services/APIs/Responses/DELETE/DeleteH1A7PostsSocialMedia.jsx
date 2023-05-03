import axios from "axios";
import { HOMEWORK_1_QUESTION_7_DELETE_SOCIAL_MEDIA_POSTS_URL } from "../../PersonalAPIConstants";

async function DeleteH1A7PostsSocialMedia({ post }) {
  try {
    const response = await axios.delete(
      `${HOMEWORK_1_QUESTION_7_DELETE_SOCIAL_MEDIA_POSTS_URL}//${post}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework1 Question7 Social Media For Deleting Post:${post.name} Failed ,Maybe Server Is Down`;
  }
}

export default DeleteH1A7PostsSocialMedia;
