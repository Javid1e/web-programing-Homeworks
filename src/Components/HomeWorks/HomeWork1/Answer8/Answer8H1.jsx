import React, { useState } from "react";
import CustomButton from "../../../../UI/Elements/CustomButton";
import Card from "../../../../UI/Elements/Card";
import styles from "./Answer8.module.css";
import CustomInput from "../../../../UI/Elements/CustomInput";
import CustomP from "../../../../UI/Elements/CustomP";

const Answer8H1 = (props) => {
  const [price, setPrice] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [amount, setAmount] = useState("");
  const [count, setCount] = useState("");
  const [reward, setReward] = useState("");
  const [amountError, setAmountError] = useState(false);
  const [countError, setCountError] = useState(false);
  const [rewardError, setRewardError] = useState(false);
  const [error, setError] = useState(false);
  const Computing = () => {
    if (amount <= 0) {
      setError(true);
      setAmountError(true);
      setShowResult(false);
    } else {
      setAmountError(false);
    }
    if (reward <= 0) {
      setError(true);
      setRewardError(true);
      setShowResult(false);
    } else {
      setRewardError(false);
    }
    if (count <= 0) {
      setError(true);
      setCountError(true);
      setShowResult(false);
    } else {
      setCountError(false);
    }

    if (amount > 0 && reward > 0 && count > 0) {
      setError(false);
      setPrice(
        (amount * (reward / 1200) * (1 + reward / 1200) ** count) /
          ((1 + reward / 1200) ** count - 1)
      );

      setShowResult(true);
    }
  };

  function handleAmountOnChange(event) {
    setAmount(event.target.value);
  }

  function handleRewardOnChange(event) {
    setReward(event.target.value);
  }

  function handleCountOnChange(event) {
    setCount(event.target.value);
  }

  return (
    <Card isDefault={true}>
      <CustomInput
        id="amount"
        type="number"
        min={0}
        value={amount}
        placeholder={amount === "" || amount === "0" ? "مثال: 20,000,000" : ""}
        label={"مبلغ وام ( تومان )"}
        error={amountError}
        isDefault={true}
        onChange={handleAmountOnChange}
      />
      <CustomInput
        id="i"
        type="number"
        min={0}
        value={reward}
        placeholder={reward === "" || reward === "0" ? "مثال: 18" : ""}
        label={"درصد سود سالیانه ( % )"}
        error={rewardError}
        onChange={handleRewardOnChange}
      />
      <CustomInput
        id="n"
        type="number"
        min={0}
        value={count}
        placeholder={count === "" || count === "0" ? "مثال: 48" : ""}
        label={"تعداد اقساط وام"}
        error={countError}
        onChange={handleCountOnChange}
      />
      <CustomButton onClick={Computing} type={"submit"} children={"محاسبه"} className={styles.a8btn} />
      {showResult ? (
          <Card isDefault={false}>
            <CustomP
                id="result"
                isMessage={true}
                children={`${"مبلغ هر قسط "} ${price} ${" تومان است. "}`}
            />
          </Card>

      ) : ( error &&
          <Card isDefault={false}>
            <CustomP
                id="error"
                isMessage={false}
                children={"لطفا اطلاعات خواسته شده را تکمیل کنید."}
            />
          </Card>


      )}
    </Card>
  );
};
export default Answer8H1;
