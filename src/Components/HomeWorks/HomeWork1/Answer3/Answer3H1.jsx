import React, { Component } from "react";
import CustomButton from "../../../../UI/Elements/CustomButton";
import Card from "../../../../UI/Elements/Card";
import styles from "./Answer3.module.css";
import CustomInput from "../../../../UI/Elements/CustomInput";
import CustomP from "../../../../UI/Elements/CustomP";

class Answer3H1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iranRial: "",
      usd: "",
      eur: "",
      gbp: "",
      aud: "",
      cad: "",
      errorMessage: "",
      showRes: false,
      hasError: false,
    };
  }

  handleIranRialChange = (event) => {
    this.setState({
      iranRial: event.target.value,
    });
  };

  handleConvert = () => {
    if (this.state.iranRial === "" || this.state.iranRial === "0") {
      this.setState({
        error: "لطفا ابتدا مقدار ارز خود را وارد کنید.",
        hasError: true,
      });
    } else {
      const { iranRial } = this.state;
      this.setState({
        usd: iranRial / 514050,
        eur: iranRial / 561670,
        gbp: iranRial / 639510,
        aud: iranRial / 346500,
        cad: iranRial / 381300,
        showRes: true,
        hasError: false,
      });
    }
  };

  render() {
    const { iranRial, usd, eur, gbp, aud, cad, error, showRes, hasError } =
      this.state;

    return (
      <Card isDefault={true}>
        <Card isDefault={false}>
          <CustomInput
            placeholder="ریال ایران"
            className={styles["a3input"]}
            type="number"
            id="iranRial"
            name="iranRial"
            value={iranRial}
            label={"مقدار ارز"}
            error={hasError}
            errorMessage={"پر کردن این فیلد الزامی است."}
            onChange={this.handleIranRialChange}
          />
          <CustomButton
            type={"submit"}
            className={styles["a3btn"]}
            onClick={this.handleConvert}
          >
            تبدیل ارز
          </CustomButton>
        </Card>

        {showRes ? (
          <Card isDefault={false}>
            <CustomInput
              type="number"
              id="usd"
              name="usd"
              value={usd}
              readOnly={true}
              label={"دلار آمریکا"}
            />
            <CustomInput
              type="number"
              id="eur"
              name="eur"
              value={eur}
              readOnly={true}
              label={"یورو"}
            />
            <CustomInput
              type="number"
              id="gbp"
              name="gbp"
              value={gbp}
              readOnly={true}
              label={"پوند انگلیس"}
            />
            <CustomInput
              type="number"
              id="aud"
              name="aud"
              value={aud}
              readOnly={true}
              label={"دلار استرالیا"}
            />
            <CustomInput
              type="number"
              id="cad"
              name="cad"
              value={cad}
              readOnly={true}
              label={"دلار کانادا"}
            />
          </Card>
        ) : (
          hasError && (
            <Card>
              <CustomP isMessage={false} children={error} />
            </Card>
          )
        )}
      </Card>
    );
  }
}

export default Answer3H1;
