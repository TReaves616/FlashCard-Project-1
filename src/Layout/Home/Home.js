import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api/index.js";
import ListDeckItems from "../Decks/ListDeckItems.js";

//this is the frame for the primary Home page.
function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchDecks() {
      const response = await listDecks(abortController.signal);
      setDecks(response);
    }
    fetchDecks();
  }, []);

  return (
    <div>
      <div className="actions mx-2 my-2">
        <Link to="/decks/new">
          <button type="button mx-2 my-2" className="btn btn-secondary">
            <span className="oi oi-plus mr-2"></span>Create Deck
          </button>
        </Link>
      </div>
      <div>
        <ListDeckItems decks={decks} />
      </div>
    </div>
  );
}

export default Home;
