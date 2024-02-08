import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteUserItemModal from "./DeleteUserItemModal";

function DeleteUserItem({itemId, change}) {
  return (
    <OpenModalButton
      buttonText="Delete"
      modalComponent={<DeleteUserItemModal itemId={itemId} change={change}
    />}

    />
  )
}

export default DeleteUserItem;
