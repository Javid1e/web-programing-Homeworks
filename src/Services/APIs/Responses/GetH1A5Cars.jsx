import axios from "axios";

async function GetH1A5Cars() {
  try {
    const response = await axios.get(`http://localhost:3008/homeWork1Cars`);
    return response.data[0];
  } catch (error) {
    console.error(error);
    return "Connecting To Homework1 Cars Failed,Maybe Server Is Down";
  }
}
export default GetH1A5Cars;
