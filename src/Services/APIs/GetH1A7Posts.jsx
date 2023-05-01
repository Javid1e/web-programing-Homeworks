import axios from "axios";

async function GetH1A7Posts() {
  try {
    const response = await axios.get(`http://localhost:3008/homeWork1Posts`);
    return response.data[0];
  } catch (error) {
    console.error(error);
    return "Connecting To Homework1 Posts Failed,Maybe Server Is Down";
  }
}
export default GetH1A7Posts;
