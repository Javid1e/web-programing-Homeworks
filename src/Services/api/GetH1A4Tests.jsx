import axios from "axios";

async function GetH1A4Tests() {
  try {
    const response = await axios.get(`http://localhost:3008/homeWork1Tests`);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework1 Tests Failed,Maybe Server Is Down";
  }
}
export default GetH1A4Tests;
