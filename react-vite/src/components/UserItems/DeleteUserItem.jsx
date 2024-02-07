import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteUserItemModal from "./DeleteUserItemModal";

function DeleteUserItem({itemId}) {
  return (
    <OpenModalButton
      buttonText="Delete"
      modalComponent={<DeleteUserItemModal itemId={itemId}
    />}

    />
  )
}

export default DeleteUserItem;
