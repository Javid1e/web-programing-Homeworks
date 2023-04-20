import React from "react";
import { Link } from "react-router-dom";
import Card from "../../UI/Elements/Card";
import styleSheet from "./UI/StyleSheet/Guest.module.css";
import CustomButton from "../../UI/Elements/CustomButton";
import CustomP from "../../UI/Elements/CustomP";
const Guest = () => {
  return (
    <>
      <Card isDefault={true} className={styleSheet.guestHeader}>
        <Card isDefault={false} className={styleSheet.guestChildCard}>
          <CustomP isMessage={true} className={styleSheet.guestPHeader}>
            به نام دانا ترین خالق
          </CustomP>
        </Card>
      </Card>
      <Card isDefault={true} className={styleSheet.guestContainer}>
        <Card isDefault={false} className={styleSheet.guestChildCard}>
          <Link to="/homeworks/homework1">
            <CustomButton type={"submit"} className={styleSheet.guestButton}>
              <p className={styleSheet.guestP}>تمرین اول برنامه نویسی وب</p>
            </CustomButton>
          </Link>
        </Card>
        <Card isDefault={false} className={styleSheet.guestChildCard}>
          <Link to="/homeworks/homework2">
            <CustomButton type={"submit"} className={styleSheet.guestButton}>
              <p className={styleSheet.guestP}>تمرین دوم برنامه نویسی وب</p>
            </CustomButton>
          </Link>
        </Card>
        <Card isDefault={false} className={styleSheet.guestChildCard}>
          <Link to="/homeworks/homework3">
            <CustomButton type={"submit"} className={styleSheet.guestButton}>
              <p className={styleSheet.guestP}>تمرین سوم برنامه نویسی وب</p>
            </CustomButton>
          </Link>
        </Card>
      </Card>
    </>
  );
};
export default Guest;
