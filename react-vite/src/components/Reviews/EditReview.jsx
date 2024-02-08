import OpenModalButton from "../OpenModalButton/OpenModalButton";
import EditReviewModal from "./EditReviewModal";
function EditReview({reviewId, itemId, change}) {
  return (
    <OpenModalButton
      buttonText="Edit"
      modalComponent={<EditReviewModal reviewId={reviewId} itemId={itemId} change={change}
    />}
    />
  )
}

export default EditReview;
