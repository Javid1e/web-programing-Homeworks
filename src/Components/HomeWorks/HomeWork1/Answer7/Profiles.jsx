import React, { useEffect, useState } from "react";
import styles from "./Profiles.module.css";
import GetH1A7Posts from "../../../../Services/APIs/Responses/GetH1A7Posts";

function Profiles({ author }) {
  const authorImage = `https://picsum.photos/200/200?random=${author}`;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authorsDetails, setAuthorsDetails] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const [authorBio, setAuthorBio] = useState("");
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
        if (author === item.id) {
          setAuthorName(item.name);
          setAuthorBio(item.biography);
        }
      });
    });
  }, [loading]);
  return (
    <div className={styles.profile}>
      <h2>{authorName}</h2>
      <img src={authorImage} alt={authorName} />
      <p>{authorBio}</p>
    </div>
  );
}

export default Profiles;
