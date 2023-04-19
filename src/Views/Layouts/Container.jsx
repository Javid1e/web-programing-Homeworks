import React from "react";
import { Outlet } from "react-router-dom";
const Container = () => {
    return (
        <div>
            container
            <Outlet  />
        </div>
    );
};
export default Container;