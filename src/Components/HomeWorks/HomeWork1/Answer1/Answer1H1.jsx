import React, {useState} from "react";
import CustomButton from "../../../../UI/Elements/CustomButton";
import Card from "../../../../UI/Elements/Card";
import styles from "./Answer1.module.css";
import Poem from "./Poem";
import GetH1A1RandomPoem from "../../../../Services/APIs/Responses/GET/GetH1A1RandomPoem";
// This component renders a button that when clicked, fetches a random poem from the server and displays it
const Answer1H1 = () => {
  const [fal, setFal] = useState("");
  const [showFal, setShowFal] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  // Fetches a random poem from the server
  const randomFal = () => {
    GetH1A1RandomPoem()
      .then((fal) => {
        if (fal === "ServerIsDown") {
          setError("اتصال با سرور برقرار نیست،لطفا سرور را راه اندازی کنید.");
          setShowError(true);
        } else {
          setFal(fal);
          setShowFal(true);
        }
      })
      .catch((e) => {
        console.log(error);
      });
  };
  return (
    <Card isDefault={true}>
      <Card isDefault={false}>
        <CustomButton
          type={"submit"}
          onClick={randomFal}
          className={styles.a1btn}
          children={"فال من را بگیر"}
        />
      </Card>
      {showFal ? (
        <Card isDefault={false} className={styles["a1container"]}>
          <div className={styles["a1fal"]}>
            {fal && <Poem title={fal.ID} poem={fal.sher} mean={fal.mani} />}
          </div>
        </Card>
      ) : (
        showError && <p className={styles["a1mes"]}>{error}</p>
      )}
    </Card>
  );
};
export default Answer1H1;
