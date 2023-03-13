import React, { FC } from "react";
import { Else, If, Then } from "react-if";
import { useGetCards } from "../hooks/useGetCards";
import { Card as CardItem } from "../models/card";

const Cards: FC = () => {
  const listCardQuery = useGetCards();
  const cardData = listCardQuery.data.cards;

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
              return (
                <li
                  key={item.id}
                >{`Wedding of ${item.bride_name} ${item.groom_name}`}</li>
              );
            })}
            <li></li>
          </ul>
        </Else>
      </If>
    </div>
  );
};

export default Cards;
