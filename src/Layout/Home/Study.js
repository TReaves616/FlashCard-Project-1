import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import CardStudy from "../Cards/CardStudy";

//This is the frame for the Studay page.
export default function Study() {
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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h2>Study: {deck.name}</h2>
      </div>
      <CardStudy cards={deck.cards} />
    </React.Fragment>
  );
}
