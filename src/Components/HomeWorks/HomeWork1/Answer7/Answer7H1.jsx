import React, { useEffect, useState } from "react";
import CustomButton from "../../../../UI/Elements/CustomButton";
import Card from "../../../../UI/Elements/Card";
import styles from "./Answer7.module.css";
import Profiles from "./Profiles";
import Posts from "./Posts";
import Comments from "./Comments";
import GetH1A7Posts from "../../../../Services/APIs/Responses/GetH1A7Posts";

const Answer7H1 = (props) => {
  const [selectedProfile, setSelectedProfile] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authorsDetails, setAuthorsDetails] = useState([]);
  const [authorsNames, setAuthorsNames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetH1A7Posts().then((item) => {
          if (
            item === "Connecting To Homework1 Cars Failed,Maybe Server Is Down"
          ) {
            setError(item);
          } else {
            setAuthorsDetails(item["authors"]);
            setLoading(false);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData().then((r) => {
      authorsDetails.map((item) => {
        authorsNames.push({ id: item.id, name: item.name });
      });
    });
  }, [loading]);
  return (
    <Card isDefault={true}>
      <h1 className={styles.a7lbl}>شبکه اجتماعی شاد</h1>
      <Card isDefault={false}>
        <h2 className={styles.a7lbl}>کاربران</h2>
        <ul className={styles.a7container}>
          {authorsNames.map((item) => {
            return (
              <CustomButton
                key={item.id}
                type={"submit"}
                onClick={() => setSelectedProfile(item.id)}
                children={item.name}
              />
            );
          })}
        </ul>
      </Card>
      <Card isDefault={false}>
        <Profiles author={selectedProfile} />
        <Posts author={selectedProfile} />
        <Comments author={selectedProfile} />
      </Card>
    </Card>
  );
};
export default Answer7H1;
