import { useModal } from "../../context/Modal";
import { deleteReviewThunk } from "../../redux/review";
import { useDispatch } from "react-redux";
import './DeleteReviewModal.css'

export default function DeleteReviewModal({reviewId, itemId}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const deleteReview = async (e) => {
    e.stopPropagation()
    await dispatch(deleteReviewThunk(reviewId))
  }

  return  (
    <div className="delete-review-container">
      <h1>Confirm Delete</h1>
      <p>Are you sure you want to remove this review?</p>
      <button style={{color: "white", backgroundColor: "red"}} onClick={deleteReview}>
        Yes (Delete Review)
      </button>
      <button style={{color: "white", backgroundColor: "darkgray"}} onClick={closeModal}>
        No (Keep Review)
      </button>
    </div>
  )
}
