import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardForm from "../Cards/CardForm";
import { readCard, readDeck } from "../../utils/api";

//this is the frame for the Edit Card page.
export default function CreateCard() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchOneDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
    }
    fetchOneDeck();
  }, [deckId]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchOneCard() {
      const response = await readCard(cardId, abortController.signal);
      setCard(response);
    }
    fetchOneCard();
  }, [cardId]);

  return (
    <React.Fragment>
      <div className="row col">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Card {cardId}
            </li>
          </ol>
        </nav>
      </div>
      <h2>Edit Card</h2>
      <CardForm
        deckId={deckId}
        editFront={card.front}
        editBack={card.back}
        cardId={cardId}
        isNew={false}
      />
    </React.Fragment>
  );
}
