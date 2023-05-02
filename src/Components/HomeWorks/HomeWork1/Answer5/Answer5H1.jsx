import React, { useEffect, useState } from "react";
import Card from "../../../../UI/Elements/Card";
import styles from "./Answer5.module.css";
import CustomButton from "../../../../UI/Elements/CustomButton";
import { FaCircle } from "react-icons/fa";
import GetH1A5Cars from "../../../../Services/APIs/Responses/GetH1A5Cars";
import CustomSelect from "../../../../UI/Elements/CustomSelect";
import CustomInput from "../../../../UI/Elements/CustomInput";
import CustomP from "../../../../UI/Elements/CustomP";
import CustomLabel from "../../../../UI/Elements/CustomLabel";

function Answer5H1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cars, setCars] = useState([]);
  const [carsBrands, setCarsBrands] = useState([]);
  const [carsTypes, setCarsTypes] = useState([]);
  const [basePrice, setBasePrice] = useState(0);
  const carBodyStatus = [
    { id: 1, value: "1", label: "سالم" },
    { id: 2, value: "2", label: "صندوق" },
    {
      id: 3,
      value: "3",
      label: "در",
    },
    { id: 4, value: "4", label: "شاسی" },
  ];
  const [years, setYears] = useState([]);
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [bodyStatus, setBodyStatus] = useState("");
  const [color, setColor] = useState("");
  const [insurance, setInsurance] = useState("");
  const [distance, setDistance] = useState("");
  const [price, setPrice] = useState(0);
  const [showRes, setShowRes] = useState(false);
  const [brandError, setBrandError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [distanceError, setDistanceError] = useState(false);
  const [insuranceError, setInsuranceError] = useState(false);
  const [colorError, setColorError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetH1A5Cars().then((item) => {
          if (
            item === "Connecting To Homework1 Cars Failed,Maybe Server Is Down"
          ) {
            setError(item);
          } else {
            setCars(item["cars"]);
            setLoading(false);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData().then((r) => {
      cars.map((car) => {
        if (car.id === 1) {
          setSelectedBrand(car.brand);
          setSelectedType(car.type);
          setYears(car.year);
        }
      });
      cars.map((car) => {
        if (
          !carsBrands.find(
            (carB) => car.brand === carB.label || car.brand === carB.value
          )
        ) {
          carsBrands.push({ id: car.id, label: car.brand, value: car.brand });
        }
      });
      cars.map((car) => {
        if (
          !carsTypes.find(
            (carB) => car.type === carB.label || car.type === carB.value
          )
        ) {
          carsTypes.push({
            id: car.id,
            label: car.type,
            value: car.type,
            brand: car.brand,
          });
        }
      });
    });
  }, [loading]);
  const findBasePrice = (car) => {
    return car.brand === selectedBrand && car.type === selectedType;
  };
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleBodyStatusChange = (event) => {
    setBodyStatus(event.target.value);
  };
  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleInsuranceChange = (event) => {
    setInsurance(event.target.value);
  };
  useEffect(() => {
    switch (selectedBrand) {
      case "پژو":
        setSecondSelectOptions([]);
        carsTypes.map((car) => {
          if (car.brand === "پژو") {
            secondSelectOptions.push({
              id: car.id,
              label: car.label,
              value: car.value,
            });
          }
        });
        setSelectOptions(secondSelectOptions);
        setBasePrice(cars.find(findBasePrice).basePrice);
        break;
      case "پراید":
        setSecondSelectOptions([]);
        carsTypes.map((car) => {
          if (car.brand === "پراید") {
            secondSelectOptions.push({
              id: car.id,
              label: car.label,
              value: car.value,
            });
          }
        });
        setSelectOptions(secondSelectOptions);
        setBasePrice(cars.find(findBasePrice).basePrice);
        break;
    }
    console.log(secondSelectOptions);
  }, [selectedBrand]);
  const calc = () => {
    if (insurance === null || insurance === "") {
      setInsuranceError(true);
    } else {
      setInsuranceError(false);
    }
    if (distance === null || distance === "") {
      setDistanceError(true);
    } else {
      setDistanceError(false);
    }
    if (selectedBrand === null || selectedBrand === "") {
      setBrandError(true);
    } else {
      setBrandError(false);
      setBasePrice(cars.find(findBasePrice).basePrice);
    }
    if (selectedType === null || selectedType === "") {
      setTypeError(true);
    } else {
      setTypeError(false);
      setBasePrice(cars.find(findBasePrice).basePrice);
    }
    if (selectedYear === null || selectedYear === "") {
      setYearError(true);
    } else {
      setYearError(false);
    }
    if (bodyStatus === null || bodyStatus === "") {
      setBodyError(true);
    } else {
      setBodyError(false);
    }
    if (
      !brandError &&
      !typeError &&
      !yearError &&
      !bodyError &&
      !distanceError &&
      !insuranceError &&
      !colorError
    ) {
      if (basePrice > 0) {
        setPrice(basePrice);
        switch (selectedYear) {
          case "1401":
            setPrice(price - price * 0.95);
            break;
          case "1400":
            setPrice(price - price * 0.9);
            break;
          case "1399":
            setPrice(price - price * 0.85);
            break;
          case "1398":
            setPrice(price - price * 0.8);
            break;
        }
        switch (bodyStatus) {
          case "1":
            setPrice(price);
            break;
          case "2":
            setPrice(price - price * 0.1);
            break;
          case "3":
            setPrice(price - price * 0.2);
            break;
          case "4":
            setPrice(price - price * 0.15);
            break;
        }
        switch (color) {
          case "black":
            setPrice(price + price * 0.4);
            break;
          case "white":
            setPrice(price + price * 0.3);
            break;
          case "blue":
            setPrice(price + price * 0.2);
            break;
          case "red":
            setPrice(price + price * 0.2);
            break;
          case "yellow":
            setPrice(price + price * 0.05);
            break;
          case "silver":
            setPrice(price + price * 0.15);
            break;
        }
        setPrice(price - (distance % 1000) * 0.05);
        setPrice(price + (insurance % 30) * 0.1);
        setShowRes(true);
      }
    }
  };
  return (
    <Card isDefault={true}>
      <Card isDefault={false}>
        <CustomSelect
          id="brand"
          error={brandError}
          label={"برند خودرو"}
          placeholder={"برند خودرو را انتخاب کنید"}
          value={selectedBrand}
          onChange={handleBrandChange}
          options={carsBrands}
        />

        <CustomSelect
          id="type"
          error={typeError}
          value={selectedType}
          label={"مدل خودرو"}
          placeholder={"مدل خودرو را انتخاب کنید"}
          onChange={handleTypeChange}
          options={selectOptions}
        />

        <CustomSelect
          label={"سال تولید"}
          error={yearError}
          placeholder={"سال تولید خودرو را انتخاب کنید"}
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
          options={years}
        />

        <CustomSelect
          id="body"
          label={"وضعیت بدنه"}
          error={bodyError}
          placeholder={"وضعیت بدنه خودرو را انتخاب کنید"}
          value={bodyStatus}
          options={carBodyStatus}
          onChange={handleBodyStatusChange}
        />
        <CustomInput
          label={"کارکرد خودرو"}
          id="km"
          min={0}
          placeholder={"مثال 345 کیلومتر"}
          type="number"
          error={distanceError}
          value={distance}
          onChange={handleDistanceChange}
        />

        <CustomInput
          id={"insurance"}
          label={"تعداد روز بیمه"}
          min={0}
          placeholder={"مثال 10 روز"}
          type="number"
          value={insurance}
          error={insuranceError}
          onChange={handleInsuranceChange}
        />

        <div className={styles["a55container"]}>
          <label>
            <input
              type="radio"
              name="color"
              value="black"
              checked={color === "black"}
              onChange={handleColorChange}
            />
            <FaCircle color="black" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="white"
              checked={color === "white"}
              onChange={handleColorChange}
            />
            <FaCircle color="white" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="blue"
              checked={color === "blue"}
              onChange={handleColorChange}
            />
            <FaCircle color="blue" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="red"
              checked={color === "red"}
              onChange={handleColorChange}
            />
            <FaCircle color="red" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="silver"
              checked={color === "silver"}
              onChange={handleColorChange}
            />
            <FaCircle color="silver" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="yellow"
              checked={color === "yellow"}
              onChange={handleColorChange}
            />
            <FaCircle color="silver" />
          </label>
          {colorError && (
            <CustomLabel
              type={"AlertLabel"}
              isHeader={false}
              children={"لطفا رنگ خودرو را انتخاب کنید."}
            />
          )}
        </div>

        <CustomButton
          type={"submit"}
          className={styles["a5btn"]}
          onClick={calc}
        >
          محاسبه قیمت
        </CustomButton>
      </Card>

      {showRes && (
        <Card isDefault={false}>
          <CustomP isMessage={true} children={price} />
        </Card>
      )}
    </Card>
  );
}

export default Answer5H1;
