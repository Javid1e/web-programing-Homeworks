import React from "react";

import { DateInput } from "react-hichestan-datetimepicker";
import styles from "./Answer2.module.css";
import CustomButton from "../../../../UI/Elements/CustomButton";
import Card from "../../../../UI/Elements/Card";
import CustomP from "../../../../UI/Elements/CustomP";

class Answer2H1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: null,
      age: "",
      months:"",
      weeks:"",
      days:"",
      hours:"",
      minutes:"",
      seconds:"",
      error: "",
    };
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  handleCalculateClick = () => {
    const selectedDate = new Date(this.state.birthDate);
    const today = new Date();
    if (
      selectedDate.toString() ===
        "Thu Jan 01 1970 03:30:00 GMT+0330 (Iran Standard Time)" ||
      selectedDate.toString() === "Invalid Date" || selectedDate> today
    ) {
      this.setState({ error: "لطفا ابتدا تاریخ تولد خود را وارد کنید." });

    } else {
      const ageInMilliseconds = today - selectedDate;
      const ageInSeconds = ageInMilliseconds / 1000;

      const years = Math.floor(ageInSeconds / 31536000);
      const months = Math.floor(ageInSeconds  / 2592000);
      const weeks = Math.floor(ageInSeconds / 604800);
      const days = Math.floor(ageInSeconds  / 86400);
      const hours = Math.floor(ageInSeconds / 3600);
      const minutes = Math.floor(ageInSeconds /  60);
      const seconds = Math.floor(ageInSeconds / 1);

      this.setState({
        age: years,
        months:months,
        weeks:weeks,
        days:days,
        hours:hours,
        minutes:minutes,
        seconds:seconds,
        error: ''
      });
    }
  };

  render() {
    const { age,months,weeks,days,hours,minutes,seconds, error } = this.state;
    return (
      <Card isDefault={true} className={styles["a2container"]}>
        <DateInput
          className={styles["a2input"]}
          placeholder="تاریخ تولد خود را انتخاب کنید"
          format="jYYYY/jMM/jDD"
          value={this.state.birthDate}
          name={"birthDate"}
          onChange={this.handleChange}
        />

        <CustomButton
          type="submit"
          onClick={this.handleCalculateClick}
          className={styles["a2btn"]}
          children={"محاسبه سن"}
        />

        {error ? (
                <Card isDefault={false}>
                  <CustomP isMessage={false} children={error}/>
                </Card>

        ) : (
          age && (
                <Card isDefault={false}>
                  <CustomP isMessage={false} children={`${" شما "}${age}${" سال زندگی کرده اید. "}`}/>
                  <CustomP isMessage={false} children={`${" شما "}${months}${" ماه زندگی کرده اید. "}`}/>
                  <CustomP isMessage={false} children={`${" شما "}${weeks}${" هفته زندگی کرده اید. "}`}/>
                  <CustomP isMessage={false} children={`${" شما "}${days}${" روز زندگی کرده اید. "}`}/>
                  <CustomP isMessage={false} children={`${" شما "}${hours}${" ساعت زندگی کرده اید. "}`}/>
                  <CustomP isMessage={false} children={`${" شما "}${minutes}${" دقیقه زندگی کرده اید. "}`}/>
                  <CustomP isMessage={false} children={`${" شما "}${seconds}${" ثانیه زندگی کرده اید. "}`}/>
                </Card>
          )
        )}
      </Card>
    );
  }
}
export default Answer2H1;
