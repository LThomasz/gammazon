import { useDispatch, useSelector } from "react-redux";
import { loadReviewsThunk } from "../../redux/review";
import { useEffect } from "react";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import "./Reviews.css"
import { useNavigate } from "react-router-dom";


function Reviews({itemId}) {
  const dispatch = useDispatch();
  const reviewsObj = useSelector((state) => state.reviews)
  const navigate = useNavigate()
  const reviews = Object.values(reviewsObj)
  useEffect(() => {
    dispatch(loadReviewsThunk(itemId))
  }, [dispatch])

  console.log(reviews)
  return (
    <div>
      {reviews?.map((rev) => {
        return (
        <div key={rev.id}>
          <p>{`${rev?.rating}`}</p>
          <p>{`${rev?.created_at}`}</p>
          <p>{`${rev?.review}`}</p>
        </div>
        )
      })}
    </div>
  )
}



export default Reviews
