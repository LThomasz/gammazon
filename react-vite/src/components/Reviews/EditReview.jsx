import OpenModalButton from "../OpenModalButton/OpenModalButton";
import EditReviewModal from "./EditReviewModal";
function EditReview({reviewId, itemId, review}) {
  return (
    <OpenModalButton
      buttonText="Edit"
      modalComponent={<EditReviewModal reviewId={reviewId} itemId={itemId} currReview={review}
    />}
    />
  )
}

export default EditReview;
