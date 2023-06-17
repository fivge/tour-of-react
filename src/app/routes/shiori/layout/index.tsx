import { Outlet } from "react-router-dom";
import "./index.less";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
