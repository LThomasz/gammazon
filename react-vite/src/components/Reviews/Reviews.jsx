import { useDispatch, useSelector } from "react-redux";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import "./Reviews.css"
import { useNavigate } from "react-router-dom";


function Reviews({reviews}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.session.user)
  const itemsObj = useSelector((state) => state.items)
  const item = Object.values(itemsObj)[0]

  const check = () => {
    if (!user) {
      return false
    }
    if (user.id == item.user_id) {
      return false
    }
    if(reviews.length) {
      for (let thing of reviews) {
        if (thing.user_id == user.id) {
          return false
        }
      }
    } else {
      return true
    }
  }

  return (
    <div>
      {check() && <div>
        <AddReview spotId={spotId} change={change}/>
      </div>}
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
