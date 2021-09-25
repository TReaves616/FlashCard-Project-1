import React from "react";
import { Link, useHistory } from "react-router-dom";
import handleDeleteCard from "./HandleDeleteCard";

/*This creates the visual Card with the Card information for display 
with the correct buttons for Edit/Delete*/
export default function CardItem({ card, index }) {

  const history = useHistory();

  return (
    <React.Fragment>
      <div key={index} className="">
        <div className="card mb-2">
          <div className="row">
            <h3 className="card-title col-3 text-center mr-2 ml-5 my-2">
              {" "}
              Front
            </h3>
            <div className="col-4"></div>
            <h3 className="card-title col-3 text-center my-2"> Back</h3>
          </div>
          <div className="row card-text float-center">
            <div className="col-3 mr-2 ml-5 my-2 text-center">
              <p>{card.front}</p>
            </div>
            <div className="col-4"></div>
            <div className="col-3 mx-2 my-2">
              <p className="float-center text-center">{card.back}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                <button type="button" className="btn btn-secondary ml-3 my-2">
                  <span className="oi oi-pencil"></span> Edit
                </button>
              </Link>
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-danger btn-lg oi oi-trash mr-2 my-2 float-right"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteCard(card.id);
                  history.go(0);
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
