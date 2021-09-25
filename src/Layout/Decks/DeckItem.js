import React from "react";
import { Link, useHistory } from "react-router-dom";
import handleDeleteDeck from "./HandleDeleteDeck";

//this creates a overview card for a single Deck to be displayed.
export default function DeckItem({ deck }) {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="card my-2">
        <div className="row">
          <h3 className="card-title col mx-2 mt-2">{deck.name}</h3>
          <p className="col-2 mt-2">{deck.cards.length} cards</p>
        </div>
        <div>
          <p className="card-text mx-2 my-2">{deck.description}</p>
        </div>
        <div className="row">
          <div className="col-6 card-text mx-2 my-2">
            <Link to={`/decks/${deck.id}`}>
              <button type="button" className="btn btn-secondary mr-2">
                <span className="oi oi-magnifying-glass"></span> View
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <button type="button" className="btn btn-secondary mr-2">
                <span className="oi oi-book"></span> Study
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-danger btn-lg oi oi-trash mr-2"
              onClick={(e) => {
                e.preventDefault();
                handleDeleteDeck(deck.id);
                history.go(0);
              }}
            ></button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
