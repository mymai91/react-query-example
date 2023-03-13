import authApi from "../../../services/authApi";

export const getListCards = async () => {
  const res = await authApi().get("/cards");

  return res.data;
};
