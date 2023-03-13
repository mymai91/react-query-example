import React, { memo, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FullPageLoading from "../components/FullPageLoading";
import Card from "../modules/Card/components/Card";
import Cards from "../modules/Card/components/Cards";
import Home from "../modules/Dashboard/Home";
import Notfound from "../modules/Dashboard/Notfound";
import { ProtectedRoute } from "./ProtectRoutes";

const routes = {
  HOME_PAGE: "/",
  LOGIN_PAGE: "/login",
  CREATE_CARD_PAGE: "/createcard",
  CARDS_PAGE: "/cards",
  CARD_PAGE: "/cards/:slug",
};

const publicRoutes = [
  {
    path: routes.HOME_PAGE,
    element: lazy(() => import("../modules/Dashboard/Home")),
    // element: <Home />,
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
  {
    path: routes.CARDS_PAGE,
    element: lazy(() => import("../modules/Card/components/Cards")),
  },
  {
    path: routes.CARD_PAGE,
    element: lazy(() => import("../modules/Card/components/Card")),
    // element: <Card />,
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
            element={
              <Suspense fallback={<FullPageLoading />}>
                <route.element />
              </Suspense>
            }
          />
        );
      })}

      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<FullPageLoading />}>
                <ProtectedRoute>
                  <route.element />
                </ProtectedRoute>
              </Suspense>
            }
          />
        );
      })}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default memo(BaseRoutes);
