import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeckForm from "../Decks/DeckForm";
import { readDeck } from "../../utils/api";

//this is the frame for the Edit Deck page.
export default function EditDeck() {
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
              Edit Deck
            </li>
          </ol>
        </nav>
      </div>
      <h2>Edit Deck</h2>
      <DeckForm
        editDesc={deck.description}
        editName={deck.name}
        editId={deck.id}
        isNew={false}
      />
    </React.Fragment>
  );
}
