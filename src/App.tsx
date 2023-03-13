import React, { memo } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import BaseRoutes from "./rotues/BaseRoutes";

function App() {
  return (
    <BrowserRouter>
      <BaseRoutes />
    </BrowserRouter>
  );
}

export default memo(App);
