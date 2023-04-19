import React from "react";
import { Outlet } from "react-router-dom";
const Default = () => {
  return (
    <div>
        default
        <Outlet  />
    </div>
  );
};
export default Default;
