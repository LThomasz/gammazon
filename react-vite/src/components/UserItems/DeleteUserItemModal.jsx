import { useModal } from "../../context/Modal";
import { deleteItemThunk, loadUserItemsThunk } from "../../redux/item";
import { useDispatch, useSelector } from "react-redux";
import './DeleteUserItemModal.css'
import { useEffect } from "react";

export default function DeleteUserItemModal({itemId, change}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const user = useSelector((state) => state.session.user)

  const deleteItem = async (e) => {
    e.stopPropagation()
    await dispatch(deleteItemThunk(itemId)).then(closeModal())
    change()
  }

  useEffect(() => {
    dispatch(loadUserItemsThunk(user.id))
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
