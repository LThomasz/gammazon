const LOAD_REVIEWS = 'review/loadReviews';
const ADD_REVIEW = 'review/addReview';
const EDIT_REVIEW = 'review/editReview';
const DELETE_REVIEW = 'review/deleteReview';
// const LOAD_REVIEWS = 'review/loadReviews';

const loadReviews = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews
  }
}

const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    review
  }
}

const editReview = (reviewId) => {
  return {
    type: EDIT_REVIEW,
    reviewId
  }
}

const deleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

export const loadReviewsThunk = (itemId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${itemId}`)

  if (res.ok) {
    const data = await res.json();
    dispatch(loadReviews(data))
    return data
  }
}

export const addReviewThunk = (review) => async (dispatch) => {
  const res = await fetch(`/api/reviews/new-review`, {
    method: "POST",
    body: review
  })


  if (res.ok) {
    const data = await res.json();
    dispatch(addReview(data))
    return data
  }
}

export const editReviewThunk = (review, reviewId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${reviewId}/edit`,{
    method: "PUT",
    body: review
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(editReview(data))
    return data
  }
}

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${reviewId}/delete`, {
    method: "DELETE",
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(deleteReview(data))
    return data
  }
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOAD_REVIEWS: {
        const newState = { ...state };
        action.reviews.reviews.forEach(el => {
          newState[el.id] = el
        });
        return newState;
      }
      case ADD_REVIEW: {
        const newState = { ...state, [action.review.id]: action.review }
        return newState;
      }
      case EDIT_REVIEW: {
        const newState = { ...state, [action.review.id]: action.review }

        return newState
      }
      case DELETE_REVIEW: {
        const newState = { ...state }
        return newState;
      }
      default:
          return state
  }
}

export default reviewReducer
