import { useModal } from "../../context/Modal";
import { deleteItemThunk, loadItemsThunk } from "../../redux/item";
import { useDispatch } from "react-redux";
import './DeleteUserItemModal.css'
import { useEffect } from "react";

export default function DeleteUserItemModal({itemId}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const deleteItem = async (e) => {
    e.stopPropagation()
    await dispatch(deleteItemThunk(itemId)).then(closeModal())
  }

  useEffect(() => {
    dispatch(loadItemsThunk())
  }, [dispatch])

  return  (
    <div className="delete-item-container">
      <h1>Confirm Delete</h1>
      <p>Are you sure you want to remove this item?</p>
      <button style={{color: "white", backgroundColor: "red"}} onClick={deleteItem}>
        Yes (Delete Item)
      </button>
      <button style={{color: "white", backgroundColor: "darkgray"}} onClick={closeModal}>
        No (Keep Item)
      </button>
    </div>
  )
}
