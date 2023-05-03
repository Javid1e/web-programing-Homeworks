import axios from "axios";
import { HOMEWORK_1_QUESTION_7_POST_SOCIAL_MEDIA_POSTS_URL } from "../../PersonalAPIConstants";

async function PostH1A7PostsSocialMedia({ post }) {
  try {
    const response = await axios.post(
      `${HOMEWORK_1_QUESTION_7_POST_SOCIAL_MEDIA_POSTS_URL}//${post}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return `Connecting Homework1 Question7 Social Media Posts For Posting Author:${post.name} Failed ,Maybe Server Is Down`;
  }
}

export default PostH1A7PostsSocialMedia;
