import { useModal } from "../../context/Modal";
import { deleteReviewThunk, loadReviewsThunk } from "../../redux/review";
import { useDispatch } from "react-redux";
import './DeleteReviewModal.css'
import { useEffect } from "react";

export default function DeleteReviewModal({reviewId, itemId, change}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const deleteReview = async (e) => {
    e.stopPropagation()
    await dispatch(deleteReviewThunk(reviewId))
    await dispatch(loadReviewsThunk(itemId)).then(closeModal())
    change()
  }

  useEffect(() => {

  }, [dispatch])

  return  (
    <div className="delete-review-container">
      <h1>Confirm Delete</h1>
      <p>Are you sure you want to remove this review?</p>
      <button className="delete-review-confirm-button" onClick={deleteReview}>
        Yes (Delete Review)
      </button>
      <button className="delete-review-keep-button" onClick={closeModal}>
        No (Keep Review)
      </button>
    </div>
  )
}
