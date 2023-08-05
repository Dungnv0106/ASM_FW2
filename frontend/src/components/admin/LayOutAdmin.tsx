import React from "react";
import Silebar from "./Silebar";
import Dashboard from "../../pages/admin/Dashboard";
import { Outlet } from "react-router-dom";

type Props = {};

const LayOutAdmin = () => {
  return (
    <>
      <div className="container">
        <Silebar />
        <Outlet />
      </div>
    </>
  );
};

export default LayOutAdmin;
