import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardForm from "../Cards/CardForm";
import { readDeck } from "../../utils/api";


//this is used for the frame of the Create Card page.
export default function CreateCard() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});

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
              Add Card
            </li>
          </ol>
        </nav>
      </div>
      <h2>{deck.name}: Add Card</h2>
      <CardForm deckId={deckId} isNew={true} />
    </React.Fragment>
  );
}
