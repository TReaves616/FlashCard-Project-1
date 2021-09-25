import { deleteDeck } from "../../utils/api";

//this is the logic in order to delete a Deck
export default function handleDeleteDeck(id) {
  let result = window.confirm(
    "Delete this deck? \n \n You will not be able to recover it."
  );
  if (result) deleteDeck(id);
}
