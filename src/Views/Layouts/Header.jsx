import React, { useEffect, useState } from "react";
import Navbar from "./partials/Navbar";

const Header = (props) => {
  const [qTitle, setQTitle] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = props.id;
    setLoading(false);
    switch (id) {
      case 0:
        setQTitle([
          { id: 0, title: "بازگشت" },
          { id: 1, title: "تمرین1" },
          { id: 2, title: "تمرین2" },
          { id: 3, title: "تمرین3" },
        ]);
        setLoading(true);
        break;
      case 1:
        setQTitle([
          { id: 0, title: "بازگشت" },
          { id: 1, title: "سوال1" },
          { id: 2, title: "سوال2" },
          { id: 3, title: "سوال3" },
          { id: 4, title: "سوال4" },
          { id: 5, title: "سوال5" },
          { id: 6, title: "سوال6" },
          { id: 7, title: "سوال7" },
          { id: 8, title: "سوال8" },
        ]);
        setLoading(true);
        break;
      case 2:
        setQTitle([
          { id: 0, title: "بازگشت" },
          { id: 1, title: "سوال1" },
          { id: 2, title: "سوال2" },
          { id: 3, title: "سوال3" },
          { id: 4, title: "سوال4" },
        ]);
        setLoading(true);
        break;
      case 3:
        setQTitle([
          { id: 0, title: "بازگشت" },
          { id: 1, title: "سوال1" },
        ]);
        setLoading(true);
        break;
      default:
        setQTitle([]);
    }
  }, [loading]);

  return (
    <header>
      <Navbar id={props.id} data={qTitle} />
    </header>
  );
};
export default Header;
