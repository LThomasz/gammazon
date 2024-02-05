import OpenModalButton from "../OpenModalButton/OpenModalButton";
import AddReviewModal from "./AddReviewModal";
function AddReview({spotId, change}) {
  return (
    <OpenModalButton
      buttonText="Post Your Review"
      modalComponent={< AddReviewModal spotId={spotId} change={change}/>}

    />
  )
}

export default AddReview;
