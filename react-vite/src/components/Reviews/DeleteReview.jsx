import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteReviewModal from "./DeleteReviewModal";
function DeleteReview({reviewId, itemId}) {
  return (
    <OpenModalButton
      buttonText="Delete"
      modalComponent={<DeleteReviewModal reviewId={reviewId} itemId={itemId}
    />}

    />
  )
}

export default DeleteReview;
