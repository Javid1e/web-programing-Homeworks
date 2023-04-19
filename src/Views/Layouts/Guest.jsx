import React from "react";
import {Link} from "react-router-dom";
const Guest = () => {
  return (
    <div>
      guest
        <div >
            <Link to="/homeworks/homework1">
                <button className="btn1">hw1</button>
            </Link>
        </div>
        <div >
            <Link to="/homeworks/homework2">
                <button className="btn1">hw2</button>
            </Link>
        </div >
        <div >
            <Link to="/homeworks/homework3">
                <button className="btn1">hw3</button>
            </Link>
        </div>
    </div>

  );
};
export default Guest;
