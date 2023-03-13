import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../apis/login";

const useLogin = () => {
  return useMutation(loginApi, {
    onSuccess: (res) => {
      sessionStorage.setItem("@apptest:AuthToken", res.token);
    },
    onError: (err) => {
      console.log("err", err);
    },
  });
};

export default useLogin;
