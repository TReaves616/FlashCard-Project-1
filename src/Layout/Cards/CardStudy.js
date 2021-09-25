import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";

/*this renders and contains the logic for dipsplaying each card in a deck
in order with flip and Next card functionality. */
function CardStudy({ cards = [] }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardState, setCardState] = useState(true);
  const history = useHistory();

  //validates that the deck has at least 3 cards
  if (cards.length < 3) {
    return <NotEnoughCards cards={cards} />;
  }
  //this determines whether the front or back of a card is shown
  const cardInfo = cardState
    ? cards[currentCard].front
    : cards[currentCard].back;

  //this changes the cardState for the card flip to happen
  function handleFlip(e) {
    e.preventDefault();
    return setCardState(!cardState);
  }
  /*this iterates which card you are looking at and sets the cardState 
so the front of the card is always displayed on the press of the Next Button.*/
  function handleNext(e) {
    e.preventDefault();
    setCardState(true);
    if (currentCard + 1 === cards.length) {
      return window.confirm("do you want to restart?")
        ? history.go(0)
        : history.push("/");
    }
    return setCurrentCard(currentCard + 1);
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            Card {currentCard + 1} of {cards.length}
          </h4>
        </div>
        <div className="card-text">
          <p className="col">{cardInfo}</p>
        </div>
        <div className="row card-text">
          <div className="col-3 mx-2 my-2">
            <button
              type="button"
              onClick={handleFlip}
              className="btn btn-secondary"
            >
              <span className="oi oi-action-undo"></span> Flip{" "}
              <span className="oi oi-action-redo"></span>
            </button>
          </div>
          <div className="col-2 my-2">
            {!cardState && (
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary"
              >
                Next <span className="oi oi-chevron-right"></span>
                <span className="oi oi-chevron-right"></span>
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardStudy;
