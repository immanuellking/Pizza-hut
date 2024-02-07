import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
