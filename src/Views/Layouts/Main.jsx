import React from "react";
import {Outlet} from "react-router-dom";
import GetDetailsOfQuestions from "../../Services/api/GetDetailsOfQuestions";



const Main = () => {
    return (
        <div>
            main
            <Outlet/>
        </div>
    );
}
export default Main;