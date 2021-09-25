import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";

/* This from is used by both createDeck and editDeck.
isNew determines if the form will Edit, if set to False. Or
Create, if set to True.
*/

export default function DeckForm({
  editDesc = "",
  editName = "",
  editId = "",
  isNew,
}) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const newDeck = { name: name, description: desc };
  const upDeck = { name: name, description: desc, id: editId };
  const history = useHistory();

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescChange = (event) => setDesc(event.target.value);

  //this sets initial values in case of Edit
  useEffect(() => {
    setName(editName);
    setDesc(editDesc);
  }, [editName, editDesc]);

  //used to Create a new deck
  const handleCreateSubmit = async function (event) {
    event.preventDefault();
    let result = await createDeck(newDeck);
    let deckId = result.id;
    history.push(`/decks/${deckId}`);
  };

  //used to Edit a deck
  const handleEditSubmit = async function (event) {
    event.preventDefault();
    let result = await updateDeck(upDeck);
    let deckId = result.id;
    history.push(`/decks/${deckId}`);
  };

  return (
    <div className="container">
      <form onSubmit={isNew ? handleCreateSubmit : handleEditSubmit}>
        <div className="row">
          <label htmlFor="name" className="form-label ml-3">
            Name
            <input
              className="form-control"
              size="50"
              id="name"
              type="text"
              name="name"
              onChange={handleNameChange}
              value={name}
              placeholder="Deck Name"
            />
          </label>
        </div>

        <label htmlFor="desc" className="form-label">
          Description
          <textarea
            className="form-control"
            rows="5"
            cols="50"
            id="desc"
            type="text"
            name="desc"
            onChange={handleDescChange}
            value={desc}
            placeholder="Deck Description"
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
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ml-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
