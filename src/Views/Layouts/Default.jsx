import React, {useEffect, useState} from "react";
import GetHomeWorkDetails from "../../Services/APIs/Details/GetHomeWorkDetails";
import {GetHomeWorkQuestions} from "../../Services/APIs/Details/GetHomeWorkQuestions";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Card from "../../UI/Elements/Card";
import Questions from "../../Components/QuestionsList/Questions";
import CustomP from "../../UI/Elements/CustomP";
import CustomList from "../../UI/List/CustomList";
import LoadingComponent from "../../UI/Elements/LoadingComponent";
// Default component for the homework page
const Default = (props) => {
  // State variables
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [error, setError] = useState([]);
  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      const id = props.id;
      try {
        const [details, fetchedQuestions] = await Promise.all([
          GetHomeWorkDetails(id),
          GetHomeWorkQuestions(id),
        ]);
        if (typeof details === "string") {
          setErrorLoading(true);
          setError(details);
        } else {
          setDetail(details);
        }
        if (typeof fetchedQuestions === "string") {
          setErrorLoading(true);
          setError((prevArray) => [...prevArray, fetchedQuestions]);
        } else {
          setQuestions(fetchedQuestions);
        }
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, [props.id]);
  // Render the component
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : errorLoading ? (
        <Card
          isDefault={false}
          children={error.map((item) => (
            <CustomP id={item.id} isMessage={false} children={item} />
          ))}
        />
      ) : (
        <>
          <Header id={0} />
          <Card
            isDefault={true}
            children={
              <CustomList
                data={detail}
                renderItem={(item) => (
                  <CustomP isMessage={true} key={item.id}>
                    {item.title}
                  </CustomP>
                )}
              />
            }
          />
          <Card
            isDefault={true}
            children={
              <>
                <Questions items={questions} />
                <Outlet />
              </>
            }
          />
        </>
      )}
    </>
  );
};
export default Default;
