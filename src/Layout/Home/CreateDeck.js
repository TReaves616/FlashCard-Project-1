import React from "react";
import { Link } from "react-router-dom";
import DeckForm from "../Decks/DeckForm";

//This is used as a Frane for the Creat Deck page.
export default function CreateDeck() {
  
  return (
    <React.Fragment>
      <div className="row col">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
      </div>
      <h2>Create Deck</h2>
      <DeckForm isNew={true} />
    </React.Fragment>
  );
}
