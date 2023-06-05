import { Outlet } from "react-router-dom";

import { HttpProvider } from "./api";

const ShioriModule = () => {
  return (
    <>
      <HttpProvider>
        <Outlet />
      </HttpProvider>
    </>
  );
};

export default ShioriModule;
