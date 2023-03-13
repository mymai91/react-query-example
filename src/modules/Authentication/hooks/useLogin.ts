import { useMutation } from "@tanstack/react-query";
import React from "react";
import { loginApi } from "../apis/login";

const useLogin = () => {
  return useMutation(loginApi, {
    onSuccess: (res) => {
      console.log("res", res);
    },
    onError: (err) => {
      console.log("err", err);
    },
  });
};

export default useLogin;
