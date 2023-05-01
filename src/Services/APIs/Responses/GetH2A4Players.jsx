import axios from "axios";

async function GetH2A4Players() {
  try {
    const response = await axios.get(`http://localhost:3008/homeWork2Players`);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework2 Players Failed,Maybe Server Is Down";
  }
}
export default GetH2A4Players;
