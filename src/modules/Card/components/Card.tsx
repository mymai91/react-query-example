import React, { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCard } from "../apis/card";
import { Card as CardItem } from "../models/card";

const Card: FC = () => {
  const params = useParams();
  const slug = params.slug;

  console.log("params", params);

  const fetchCard = ({ queryKey }: any) => {
    const [card, slug] = queryKey;

    return getCard(slug);
  };

  const cardQuery = useQuery(["card", slug], fetchCard);
  const cardData: CardItem = cardQuery.data?.card;
  console.log("cardQuery", cardData);

  if (cardQuery.isLoading) {
    return <p>Loading</p>;
  }
  if (cardQuery.isError) {
    return <p>Error</p>;
  }

  if (cardQuery.isFetching) {
    return <p>Feching</p>;
  }
  return (
    <div>
      <div>
        <p>{cardData.bride_name}</p>
      </div>
    </div>
  );
};

export default Card;
