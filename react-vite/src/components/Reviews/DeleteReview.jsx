import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteReviewModal from "./DeleteReviewModal";
function DeleteReview({reviewId, itemId, change}) {
  return (
    <OpenModalButton
      buttonText="Delete"
      modalComponent={<DeleteReviewModal reviewId={reviewId} itemId={itemId} change={change}
    />}

    />
  )
}

export default DeleteReview;
