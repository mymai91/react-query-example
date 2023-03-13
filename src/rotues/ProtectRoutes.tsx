import React from "react";
import { Navigate } from "react-router-dom";

// TODO update react-code-base

export const ProtectedRoute = ({ children }: any) => {
  const isUser = () => {
    return !!sessionStorage.getItem("@apptest:AuthToken");
  };

  if (!isUser()) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
