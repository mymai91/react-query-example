import React, { memo, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "../modules/Dashboard/Notfound";
import { ProtectedRoute } from "./ProtectRoutes";

const routes = {
  HOME_PAGE: "/",
  LOGIN_PAGE: "/login",
  CREATE_CARD_PAGE: "/createcard",
};

const publicRoutes = [
  {
    path: routes.HOME_PAGE,
    element: lazy(() => import("../modules/Dashboard/Home")),
  },

  {
    path: routes.LOGIN_PAGE,
    element: lazy(() => import("../modules/Authentication/components/Login")),
  },
];

const privateRoutes = [
  {
    path: routes.CREATE_CARD_PAGE,
    element: lazy(() => import("../modules/Card/components/CreateCard")),
  },
];

// TODO update react-code-base

const BaseRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      })}

      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute>
                <route.element />
              </ProtectedRoute>
            }
          />
        );
      })}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default memo(BaseRoutes);
