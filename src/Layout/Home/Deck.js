import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index.js";
import ViewDeck from "../Decks/ViewDeck.js";
import ListedCards from "../Cards/ListedCards";

//this is the frame when Viewing a deck overview with its cards overview.
export default function Deck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchOneDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
    }
    fetchOneDeck();
  }, [deckId]);

  return (
    <React.Fragment>
      <div className="row">
        <nav aria-label="breadcrumb" className="ml-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {deck.name}
            </li>
          </ol>
        </nav>
      </div>
      <ViewDeck deck={deck} />
      <ListedCards cards={deck.cards} />
    </React.Fragment>
  );
}
