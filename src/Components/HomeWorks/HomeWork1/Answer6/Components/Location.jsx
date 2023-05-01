import React, { useState } from "react";
import CustomButton from "../../../../../UI/Elements/CustomButton";
import CustomLabel from "../../../../../UI/Elements/CustomLabel";
import CustomP from "../../../../../UI/Elements/CustomP";
import Mapir from "mapir-react-component";

const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5ZmY0ZWQxNjQ5YTE0MWI0YjUwOGVlYmQ0ZGMyODkxMWQ5ZTc3YzMxNTM0YWI3NTdlNDQ5NTJhZTc1M2NiYWJkZWVjMDg0OTkxYzBhOTU0In0.eyJhdWQiOiIyMjAzOSIsImp0aSI6Ijg5ZmY0ZWQxNjQ5YTE0MWI0YjUwOGVlYmQ0ZGMyODkxMWQ5ZTc3YzMxNTM0YWI3NTdlNDQ5NTJhZTc1M2NiYWJkZWVjMDg0OTkxYzBhOTU0IiwiaWF0IjoxNjgyNTkzNjUyLCJuYmYiOjE2ODI1OTM2NTIsImV4cCI6MTY4NTE4NTY1Miwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.r33RyXDYGzWs_5WOPDz94_8OVtTPJSx4dyCSq9to1Bldn2qkzy_-ls7n10odbUM4jTrikHqV1tUP1enUmeOmhgVW8T_8-Ndl6_urJx--rxW_vtnz2g8uga8OZ83O88BIgEk_cznceF11l4nj5tZLr3_iSzVoNiD-dEXnU5dK0rSiLKOWqa3IS6UZ9Wh1TA8lMQoLyJLScxW8R2vfjNVIOW-qcYc1Hr2w3hXAD-z2F5HAg5jtmcdNzvtqbHWkyc6DUKrvdJ5C7vU5YFyXSzXvJeZKDMkcbzOrLJ0lGVsBqYI9skStqSMtAz93_AX8uq4s-yQ67IZxXDYCDaA1A2vYHg", //Mapir APIs key
        "Mapir-SDK": "reactjs",
      },
    };
  },
});
const Location = () => {
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation(`Lat: ${lat}, Lng: ${lng}`);
          setLat(lat);
          setLng(lng);
        },
        () => {
          setLocation("Unable to retrieve your location");
        }
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <CustomLabel
        type={"HeaderLabel"}
        isHeader={true}
        htmlFor={"gps"}
        children={"دریافت اوقات شرعی بر حسب موقعیت مکانی"}
      />
      <CustomButton
        type={"submit"}
        onClick={getLocation}
        children={
          <img src="/assets/Icons/place_marker_50px.png" alt="Location Icon" />
        }
      />
      <CustomP id={"location"} isMessage={true} children={location} />
      <Map lat={lat} lng={lng} />
    </div>
  );
};

export default Location;
