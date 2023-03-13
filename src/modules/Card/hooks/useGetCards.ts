import { useQuery } from "@tanstack/react-query";
import { getListCards } from "../apis/card";

export const useGetCards = () => {
  const listCardData = useQuery(["cards"], getListCards, {
    staleTime: 1000 * 60 * 5,
    placeholderData: { cards: [] },
  });

  return listCardData;
};
