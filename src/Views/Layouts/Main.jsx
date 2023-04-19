import React from "react";
import {Outlet} from "react-router-dom";
import GetRandomPoem from "../../Services/api/GetRandomPoem";

const Main = () => {
    GetRandomPoem()
        .then((res) => {
            console.log(res)
        });
    return (
        <div>
            main
            <Outlet/>
        </div>
    );
}
export default Main;