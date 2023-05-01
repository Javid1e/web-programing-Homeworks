import axios from "axios";

async function GetH2A1Tests() {
  try {
    const response = await axios.get(`http://localhost:3008/homeWork2Tests`);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework2 Tests Failed,Maybe Server Is Down";
  }
}

export default GetH2A1Tests;
