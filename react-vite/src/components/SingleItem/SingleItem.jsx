import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { loadOneItemThunk } from "../../redux/item"
import { loadReviewsThunk } from "../../redux/review";
import Reviews from "../Reviews/Reviews";
import './SingleItem.css'

function SingleItem() {
  const [state, setState] = useState(false);
  const {productId} = useParams()
  const dispatch = useDispatch();
  const itemsObj = useSelector((state) => state.items)
  const reviewsObj = useSelector((state) => state.reviews)
  const item = Object.values(itemsObj)[0]
  const reviews = Object.values(reviewsObj)
  const numReviews = reviews.length

  const avgRating = () => {
    if (reviews.length) {
      let ratings = 0;
      reviews.forEach((el) => ratings += el.rating)
      return (ratings /= reviews.length)
    } else {
      return 'No Reviews'
    }
  }


  const changeState = () => {
    setState(!state);
  }

  useEffect(() => {
    dispatch(loadOneItemThunk(productId))
    dispatch(loadReviewsThunk(productId))
  }, [dispatch, state, productId])

  if (!item) return null
  return (
    <>
      <div className="single-main-container">
        <div className="single-child-container">
          <div className="single-image-container">
              <img src={`${item?.image}`} alt="" />
          </div>
          <div className="single-info-container">
            <h2>{`${item?.name}`}</h2>
            <h3>{`${item?.created_at}`}</h3>
            <h4>
              {`$ ${Number(item?.price).toFixed(2)} `}
              <i className="fa-solid fa-star"></i>
              {typeof avgRating() === 'string' ? 'New' : avgRating().toFixed(1)} {typeof numReviews === 'string' ? null : numReviews == 1 ? `· ${numReviews} review` : `· ${numReviews} reviews`}
            </h4>
            <p>{`${item?.description}`}</p>
          </div>
        </div>
      </div>
      <div>
        <Reviews reviews={reviews} change={changeState}/>
      </div>
    </>
  )
}

export default SingleItem
