import Api from "../../../services/api";
import { LoginParams } from "../models/login";

export const loginApi = async ({ email, password }: LoginParams) => {
  const res = await Api().post("/login", {
    user: {
      email,
      password,
    },
  });
  console.log("res", res);
  console.log("res", res);
  return { ...res.data, token: res.headers.authorization };
};
