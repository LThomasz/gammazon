import { useModal } from "../../context/Modal";
import { editReviewThunk } from "../../redux/review";
import { useDispatch, useSelector } from "react-redux";
import './EditReviewModal.css'
import { useState } from "react";

export default function EditReviewModal({reviewId, itemId, change, currReview}) {
  const user = useSelector(state => state.session.user)
  const [review, setReview] = useState(`${currReview.review}`)
  const [activeRating, setActiveRating] = useState(`${currReview.rating}`);
  const [rating, setRating] = useState(`${currReview.rating}`);
  const { closeModal } = useModal()
  const dispatch = useDispatch();
  const disabled = false;
  const onChange = (number) => {
    setRating(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", user.id);
    formData.append("item_id", itemId);
    formData.append("rating", rating);
    formData.append("review", review);

    // for (let i of formData.entries()) {
    //   console.log(i[0]+ ', ' + i[1])
    // }

    await dispatch(editReviewThunk(formData, reviewId)).then(closeModal())

  }

  return (
    <div className="edit-review-container">
      <form onSubmit={handleSubmit}
        className="edit-review-form"
        action={`/api/reviews/${reviewId}/edit`}
        encType="multipart/form-data"
      >
        <div className="edit-review-header">
          <h1>Edit a written review</h1>
        </div>
        <div className="edit-review-review">
          <label>
            Review
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <div>
        <div className="rating-input" id="rating-input">
            <div className={activeRating > 0 ? `filled` : `empty`}
              onClick={() => onChange(1)}
            >
              <i className="fa fa-star"
                onMouseEnter={() => disabled || setActiveRating(1)}
                onMouseLeave={() => disabled || setActiveRating(rating)}
              ></i>
            </div>
            <div className={activeRating > 1 ? `filled` : `empty`}
              onClick={() => onChange(2)}
            >
              <i className="fa fa-star"
                onMouseEnter={() => disabled || setActiveRating(2)}
                onMouseLeave={() => disabled || setActiveRating(rating)}
              ></i>
            </div>
            <div className={activeRating > 2 ? `filled` : `empty`}
              onClick={() => onChange(3)}
            >
              <i className="fa fa-star"
                onMouseEnter={() => disabled || setActiveRating(3)}
                onMouseLeave={() => disabled || setActiveRating(rating)}
              ></i>
            </div>
            <div className={activeRating > 3 ? `filled` : `empty`}
              onClick={() => onChange(4)}
            >
              <i className="fa fa-star"
                onMouseEnter={() => disabled || setActiveRating(4)}
                onMouseLeave={() => disabled || setActiveRating(rating)}
              ></i>
            </div>
            <div className={activeRating > 4 ? `filled` : `empty`}
              onClick={() => onChange(5)}
            >
              <i className="fa fa-star"
                onMouseEnter={() => disabled || setActiveRating(5)}
                onMouseLeave={() => disabled || setActiveRating(rating)}
              ></i>
            </div>
            <label htmlFor="rating-input">Stars</label>
          </div>
        </div>
        <button
          type="submit"
          disabled={review.length < 10 || rating < 1}
        >Submit Your Edited Review</button>
      </form>
    </div>
  )
}
