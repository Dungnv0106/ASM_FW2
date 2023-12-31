import { Navigate } from "react-router-dom";

type PrivateRouterProps = {
  children: JSX.Element;
};

const PrivateRouter = (props: PrivateRouterProps) => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  if (!user.role) {
    return <Navigate to="/login" />;
  }
  if (user.role === "member") {
    return <Navigate to="/" />;
  }
  return props.children;
};

export default PrivateRouter;
