import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Card from "../../UI/Elements/Card";
import styleSheet from "./UI/StyleSheet/Guest.module.css";
import CustomButton from "../../UI/Elements/CustomButton";
import CustomP from "../../UI/Elements/CustomP";
import LoadingComponent from "../../UI/Elements/LoadingComponent";
import GetHomeWorksDetails from "../../Services/APIs/Details/GetHomeWorksDetails";
// Component to render a button with a link
const GuestButton = ({ to, children }) => (
  <Link to={to}>
    <CustomButton type="submit" className={styleSheet.guestButton}>
      {children}
    </CustomButton>
  </Link>
);
// Component to render the guest page
const Guest = () => {
  // States to manage loading and error
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(null);
  // State to store the data from the API
  const [data, setData] = useState([]);
  // States to store the title and home works
  const [tittle, setTittle] = useState(null);
  const [homeWorks, setHomeWorks] = useState([]);
  // Fetch the data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetHomeWorksDetails().then((item) => {
          if (typeof item === "string") {
            setErrorLoading(item);
          } else {
            setData(item);
          }
        });
      } catch (e) {
        console.log(e);
        setLoading(false);
        setErrorLoading((prevValue) => [prevValue, e]);
      }
    };
    fetchData().then(() => {
      // Loop through the data and store the title and home works
      data.map((item) => {
        if (item.id === 0) {
          setTittle(item.title);
        } else {
          setHomeWorks((prevArray) => [
            ...prevArray,
            { id: item.id, title: item.title },
          ]);
        }
      });
      // Set loading to false after 3 seconds
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
  }, [loading]);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : errorLoading ? (
        <Card
          isDefault
          children={
            <CustomP isMessage={false} id={"0"} children={errorLoading} />
          }
        />
      ) : (
        <>
          {/* Render the title */}
          <Card isDefault className={styleSheet.guestHeader}>
            <Card isDefault={false} className={styleSheet.guestChildCard}>
              <CustomP isMessage className={styleSheet.guestPHeader}>
                {tittle}
              </CustomP>
            </Card>
          </Card>
          {/* Render the home works */}
          <Card
            isDefault
            className={styleSheet.guestContainer}
            children={homeWorks.map((item) => (
              <Card
                key={item.id}
                isDefault={false}
                className={styleSheet.guestChildCard}
                children={
                  <GuestButton
                    to={`/homeworks/homework${item.id}`}
                    children={item.title}
                  />
                }
              />
            ))}
          />
        </>
      )}
    </>
  );
};
export default Guest;
