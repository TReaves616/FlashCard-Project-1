import React from "react";
import DeckItem from "./DeckItem";

//this generates a list of single deck items for display.
export default function ListDeckItems({ decks }) {
  const listedDecks = decks.map((deck) => (
    <DeckItem deck={deck} key={deck.id} />
  ));
  return listedDecks;
}
