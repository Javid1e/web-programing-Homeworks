import React, { useState } from "react";
import "./PrayerTimes.css";
import Card from "../../../../UI/Elements/Card";
import CustomInput from "../../../../UI/Elements/CustomInput";
import LoadingComponent from "../../../../UI/Elements/LoadingComponent";
import CustomP from "../../../../UI/Elements/CustomP";
import CustomButton from "../../../../UI/Elements/CustomButton";
import Location from "./Components/Location";

function Answer6H1() {
  const [loading, setLoading] = useState(true);
  const [cityError, setCityError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [errorLoading, setErrorLoading] = useState(null);
  const [city, setCity] = useState("tehran");
  const [showCalender, setShowCalender] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleShowCalender = () => {
    setShowCalender(true);
  };
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : errorLoading ? (
        <Card
          isDefault={false}
          children={
            <CustomP isMessage={false} id={"error"} children={errorLoading} />
          }
        />
      ) : showCalender ? (
        <Card isDefault={true} />
      ) : (
        <Card
          isDefault={true}
          children={
            <>
              <CustomInput
                id={"city"}
                value={city}
                label={"نام شهر"}
                error={cityError}
                errorMessage={"انتخاب نام شهر الزامی است."}
                placeholder={"تهران"}
                onChange={handleCityChange}
              />
              <Location />
              <CustomButton
                type={"submit"}
                children={"نمایش اوقات شرعی"}
                onClick={handleShowCalender}
              />
            </>
          }
        />
      )}
    </>
  );
}

export default Answer6H1;
