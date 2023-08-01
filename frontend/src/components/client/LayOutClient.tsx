import FooterClient from "./FooterClient";
import HeaderClient from "./HeaderClient";
import { Outlet } from "react-router-dom";
import "../../index.css";

const LayOutClient = () => {
  return (
    <div>
      <HeaderClient />
      <Outlet></Outlet>
      <FooterClient />
    </div>
  );
};

export default LayOutClient;
