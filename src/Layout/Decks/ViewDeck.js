import React from "react";
import { Link, useHistory } from "react-router-dom";
import handleDeleteDeck from "./HandleDeleteDeck";

//this is used to generate a visual overview of a deck for the detailed Deck view page.
export default function ViewDeck({ deck }) {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="">
        <div className="row">
          <h3 className="ml-4">{deck.name}</h3>
        </div>
        <div>
          <p className="ml-2">{deck.description}</p>
        </div>
        <div className="row">
          <div className="col ml-2">
            <Link to={`/decks/${deck.id}/edit`}>
              <button type="button" className="btn btn-secondary mr-2">
                <span className="oi oi-pencil"></span> Edit
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <button type="button" className="btn btn-primary mr-2">
                <span className="oi oi-book"></span> Study
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/cards/new`}>
              <button type="button" className="btn btn-primary mr-2">
                <span className="oi oi-plus"></span> Add Cards
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-danger btn-lg oi oi-trash mr-2"
              onClick={(e) => {
                e.preventDefault();
                handleDeleteDeck(deck.id);
                history.push("/");
              }}
            ></button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
