import { useModal } from "../../context/Modal";
import { editReviewThunk } from "../../redux/review";
import { useDispatch, useSelector } from "react-redux";
import './EditReviewModal.css'
import { useState, useEffect } from "react";

export default function EditReviewModal({reviewId, itemId, currReview}) {
  const user = useSelector(state => state.session.user)
  const [review, setReview] = useState(`${currReview.review}`)
  const [activeRating, setActiveRating] = useState(`${currReview.rating}`);
  const [rating, setRating] = useState(`${currReview.rating}`);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState("");
  const { closeModal } = useModal()
  const dispatch = useDispatch();
  const disabled = false;
  const onChange = (number) => {
    setRating(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true)

    if (!Object.values(errors).length){
      const formData = new FormData();
      formData.append("user_id", user.id);
      formData.append("item_id", itemId);
      formData.append("rating", rating);
      formData.append("review", review);

      await dispatch(editReviewThunk(formData, reviewId)).then(closeModal())
    }

  }

  useEffect(() => {
    const newErrors = {}

    if (!review.length) {
      newErrors.review = "Review is required"
    }

    if (review.length < 15 || review.length > 250) {
      newErrors.review = "Review must be between 15 and 250 characters"
    }

    if (!rating) {
      newErrors.rating = "Rating is required"
    }

    setErrors(newErrors)
  }, [review, rating])

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
            {submitted && errors.review && <p style={{color: 'red'}}>{errors.review}</p>}
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
            <label htmlFor="rating-input">
              Stars
              {submitted && errors.rating && <p style={{color: 'red'}}>{errors.rating}</p>}
            </label>
          </div>
        </div>
        <button
          className="edit-review-submit-butt"
          type="submit"
        >Submit Your Edited Review</button>
      </form>
    </div>
  )
}
