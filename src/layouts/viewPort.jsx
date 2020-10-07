import React, { lazy } from "react";

import NavManu from "../components/navMenu";
import AccessContextProvider from ".";

const AppRoutes = lazy(() => import("../appRoutes"));

const ViewPort = () => {
  return (
    <AccessContextProvider>
      <div className="d-flex" />
    </AccessContextProvider>
  );
};
export default ViewPort;
