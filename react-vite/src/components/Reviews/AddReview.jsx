import OpenModalButton from "../OpenModalButton/OpenModalButton";
import AddReviewModal from "./AddReviewModal";
function AddReview({itemId}) {
  return (
    <OpenModalButton
      buttonText="Post Your Review"
      modalComponent={< AddReviewModal itemId={itemId}/>}

    />
  )
}

export default AddReview;
