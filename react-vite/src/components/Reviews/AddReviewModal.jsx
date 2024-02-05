import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReviewThunk, loadReviewsThunk } from "../../redux/review";
import { useModal } from "../../context/Modal";
import './AddReviewModal.css'

export default function AddReviewModal({itemId}) {
  const user = useSelector(state => state.session.user)
  const [review, setReview] = useState('')
  const [activeRating, setActiveRating] = useState(0);
  const [rating, setRating] = useState(0);
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

    await dispatch(addReviewThunk(formData))

  }
  return (
    <div className="add-review-container">
      <form onSubmit={handleSubmit}
        className="add-review-form"
        action="/api/reviews/new-review"
        encType="multipart/form-data"
      >
        <div className="add-review-header">
          <h1>Add a written review</h1>
        </div>
        <div>
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
        >Submit Your Review</button>
      </form>
    </div>
  )
}
