import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

/*This is used to either Edit or Create a card. the prop 'isNew' is set to 
True to determine a Create form and False for an Edit form.*/
export default function DeckForm({
  editFront = "",
  editBack = "",
  deckId,
  cardId,
  isNew,
}) {
  
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const newCard = { front: front, back: back };
  const upCard = {
    front: front,
    back: back,
    id: cardId,
    deckId: Number(deckId),
  };
  const history = useHistory();
  const handleFrontChange = (event) => setFront(event.target.value);
  const handleBackChange = (event) => setBack(event.target.value);

  //this runs initially and sets the values in the forms in case of Edit.
  useEffect(() => {
    setFront(editFront);
    setBack(editBack);
  }, [editFront, editBack]);

  //this is called to create a card
  const handleCreateSubmit = async function (event) {
    event.preventDefault();
    let result = await createCard(deckId, newCard);
    setFront("");
    setBack("");
    console.log(result);
  };

  //this is called to Edit a card
  const handleEditSubmit = async function (event) {
    event.preventDefault();
    console.log(upCard);
    let result = await updateCard(upCard);
    console.log(result);
    history.push(`/decks/${deckId}`);
  };

  return (
    <div className="">
      <form onSubmit={isNew ? handleCreateSubmit : handleEditSubmit}>
        <div className="row">
          <label htmlFor="front" className="form-label ml-3">
            Front
            <textarea
              className="form-control"
              rows="5"
              cols="50"
              id="front"
              type="text"
              name="front"
              onChange={handleFrontChange}
              value={front}
              placeholder="Front side of card"
            />
          </label>
        </div>

        <label htmlFor="back" className="form-label">
          Back
          <textarea
            className="form-control"
            rows="5"
            cols="50"
            id="back"
            type="text"
            name="back"
            onChange={handleBackChange}
            value={back}
            placeholder="Back side of card"
          />
        </label>
        <div className="row">
          <button
            type="button"
            className="btn btn-secondary ml-3"
            onClick={(e) => {
              e.preventDefault();

              history.go(-1);
            }}
          >
            <span className="oi oi-chevron-left"></span>{" "}
            {isNew ? "Done" : "Cancel"}
          </button>
          <button type="submit" className="btn btn-primary ml-2">
            <span className="oi oi-task"></span> {isNew ? "Submit" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
