import React from "react";
import CardItem from "./CardItem";

//this is used to take an array of cards and generate a list of cardItems for display
export default function ListedCards({ cards = [] }) {
  
  const cardslist = cards.map((card, index) => (
    <CardItem card={card} key={index} />
  ));

  return (
    <React.Fragment>
      <h3>Cards</h3>
      {cardslist}
    </React.Fragment>
  );
}
