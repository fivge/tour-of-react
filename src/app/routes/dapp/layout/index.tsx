import { Outlet } from "react-router-dom";

import N from "./nodes";

const Layout = () => {
  return (
    <>
      <N.Page>
        <Outlet />
      </N.Page>
    </>
  );
};

export default Layout;
