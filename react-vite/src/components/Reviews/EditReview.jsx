import OpenModalButton from "../OpenModalButton/OpenModalButton";
import EditReviewModal from "./EditReviewModal";
function EditReview({reviewId, itemId, change, review}) {
  return (
    <OpenModalButton
      buttonText="Edit"
      modalComponent={<EditReviewModal reviewId={reviewId} itemId={itemId} change={change} currReview={review}
    />}
    />
  )
}

export default EditReview;
