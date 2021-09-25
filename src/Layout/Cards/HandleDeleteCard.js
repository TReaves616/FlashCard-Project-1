import { deleteCard } from "../../utils/api";

//this is the logic for the Delete Card button
export default function handleDeleteCard(id) {
  let result = window.confirm(
    "Delete this Card? \n \n You will not be able to recover it."
  );
  if (result) deleteCard(id);
}
