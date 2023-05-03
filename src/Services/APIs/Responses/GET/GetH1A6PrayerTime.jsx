import axios from "axios";

async function GetHomeWorks(city, month) {
  try {
    const response = await axios.get(
      `https://api.aladhan.com/v1/calendarByCity/1402/${month}?city=${city}&country=iran&method=8`
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return "Connecting To Homework1 Prayer Failed,Maybe Server Is Down";
  }
}

export default GetHomeWorks;
