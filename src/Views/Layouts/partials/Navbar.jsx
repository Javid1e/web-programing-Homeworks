import React from "react";
import CustomButton from "../../../UI/Elements/CustomButton";
import CustomList from "../../../UI/List/CustomList";
import styleSheet from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../UI/Elements/Card";

const Navbar = (props) => {
  let navigate = useNavigate();
  const handlePath = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.location.reload();
  };

  return (
    <Card isDefault={true}>
      <CustomList
        className={styleSheet["customList"]}
        data={props.data}
        renderItem={(item) => {
          switch (props.id) {
            case 0:
              if (item.id === 0 && item.title === "بازگشت") {
                return (
                  <Link to="/web_programing_homeworks">
                    <CustomButton type={"close"} className={styleSheet.btn}>
                      بازگشت
                    </CustomButton>
                  </Link>
                );
              } else {
                const path = `${"/homeworks/homework" + item.id}`;
                return (
                  <CustomButton
                    type={"submit"}
                    children={item.title}
                    onClick={(e) => handlePath(e, path)}
                  />
                );
              }
            case 1:
              if (item.id === 0 && item.title === "بازگشت") {
                return (
                  <Link to="/web_programing_homeworks">
                    <CustomButton type={"close"}>بازگشت</CustomButton>
                  </Link>
                );
              } else {
                const path = `${"/homeworks/homework1/answers/q" + item.id}`;
                return (
                  <Link to={path}>
                    <CustomButton type={"submit"} children={item.title} />
                  </Link>
                );
              }
            case 2:
              if (item.id === 0 && item.title === "بازگشت") {
                return (
                  <Link to="/web_programing_homeworks">
                    <CustomButton type={"close"}>بازگشت</CustomButton>
                  </Link>
                );
              } else {
                const path = `${"/homeworks/homework2/answers/q" + item.id}`;
                return (
                  <Link to={path}>
                    <CustomButton type={"submit"} children={item.title} />
                  </Link>
                );
              }
            case 3:
              if (item.id === 0 && item.title === "بازگشت") {
                return (
                  <Link to="/web_programing_homeworks">
                    <CustomButton type={"close"}>بازگشت</CustomButton>
                  </Link>
                );
              } else {
                const path = `${"/homeworks/homework3/answers/q" + item.id}`;
                return (
                  <Link to={path}>
                    <CustomButton type={"submit"} children={item.title} />
                  </Link>
                );
              }
          }
        }}
      />
    </Card>
  );
};
export default Navbar;
