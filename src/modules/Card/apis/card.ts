import authApi from "../../../services/authApi";

export const getListCards = async () => {
  const res = await authApi().get("/cards");

  return res.data;
};

export const getCard = async (slug: string) => {
  const res = await authApi().get(`/cards/${slug}`);

  return res.data;
};
