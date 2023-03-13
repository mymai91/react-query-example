import { useQueryClient } from "@tanstack/react-query";
import React, { FC } from "react";
import { Else, If, Then } from "react-if";
import { Link } from "react-router-dom";
import { getCard } from "../apis/card";
import { useGetCards } from "../hooks/useGetCards";
import { Card as CardItem } from "../models/card";

const Cards: FC = () => {
  const listCardQuery = useGetCards();
  const cardData = listCardQuery.data.cards;
  const queryClient = useQueryClient();

  const getCardItem = async ({ queryKey }: any) => {
    const [card, slug] = queryKey;

    const data = await getCard(slug);
    return data;
  };

  if (listCardQuery.isLoading) {
    return <p>Is Loading</p>;
  }

  return (
    <div>
      <p>Cards</p>

      <If condition={cardData?.length === 0}>
        <Then>
          <p>No Data</p>
        </Then>
        <Else>
          <ul>
            {cardData.map((item: CardItem) => {
              if (item.slug) {
                return (
                  <li key={item.id}>
                    <Link
                      to={`/cards/${item.slug}`}
                      onMouseEnter={async () => {
                        await queryClient.prefetchQuery(
                          ["card", item.slug],
                          getCardItem,
                          { staleTime: 1000 * 5 }
                        );
                      }}
                    >{`Wedding of ${item.bride_name} ${item.groom_name}`}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </Else>
      </If>
    </div>
  );
};

export default Cards;
