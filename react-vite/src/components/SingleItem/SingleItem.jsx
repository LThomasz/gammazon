import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { loadOneItemThunk } from "../../redux/item"
import { loadReviewsThunk } from "../../redux/review";
import Reviews from "../Reviews/Reviews";
import './SingleItem.css'

function SingleItem() {
  // const options = (function opMaker() {
  //   let arr = []
  //   for (let i = 1; i < 31; i++) {
  //     arr.push(i)
  //   }
  //   return arr
  // })();
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [quantity, setQuantity] = useState(1);
  const {productId} = useParams()
  const dispatch = useDispatch();
  const itemsObj = useSelector((state) => state.items)
  const reviewsObj = useSelector((state) => state.reviews)
  // const user = useSelector(state => state.session.user)
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
    setTimeout(() => setLoading(false), 400)
    dispatch(loadReviewsThunk(productId))
  }, [dispatch, state, productId])
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("user_id", user.id);
  //   formData.append("item_id", item.id);
  //   formData.append("quantity", parseInt(quantity));
  //   formData.append("price", parseInt(item?.price)*parseInt(quantity));
  // }

  if (loading) {
    return null
  }

  return (
    <>
      <div className="single-main-container">
        <div className="single-child-container">
          <div className="single-image-container">
              <img src={`${item?.image}`} alt="" />
          </div>
          <div className="single-info-container">
            <h2>{`${item?.name}`}</h2>
            <h3>{`${new Date(item?.created_at).toDateString()}`}</h3>
            <h4>
              {`$ ${Number(item?.price).toFixed(2)} `}
              <i className="fa-solid fa-star"></i>
              {typeof avgRating() === 'string' ? 'New' : avgRating().toFixed(1)} {typeof numReviews === 'string' ? null : numReviews == 1 ? `· ${numReviews} review` : `· ${numReviews} reviews`}
            </h4>
            <p>{`${item?.description}`}</p>
          </div>
        </div>
        {/* <div className="single-cart-container">
          <form
            action="/api/cart_items"
            onSubmit={handleSubmit}
            className="cart-item-form"
            encType="multipart/form-data"
          >
            <div className="cart-form-el">
              <p className="cart-item-p"> Quantity </p>
              <select value={quantity} className="cart-item-quantity" onChange={(e) => setQuantity(e.target.value)}>
                {options.map(el => {
                  return <option value={`${el}`}>{`${el}`}</option>
                })}
              </select>
            </div>
            <div className="cart-item-button">
              <button
                className="cart-item-butt"
                type="submit"
              > Add to Cart</button>
          </div>
          </form>
        </div> */}
      </div>
      <div>
        <Reviews reviews={reviews} change={changeState}/>
      </div>
    </>
  )
}

export default SingleItem
