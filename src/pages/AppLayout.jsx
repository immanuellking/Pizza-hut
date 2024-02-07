import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
