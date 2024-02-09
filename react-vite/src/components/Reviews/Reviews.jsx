import { useSelector } from "react-redux";
import AddReview from "./AddReview";
import DeleteReview from "./DeleteReview"
import "./Reviews.css"
import EditReview from "./EditReview";
function Reviews({reviews, change}) {
  const user = useSelector((state) => state.session.user)
  const itemsObj = useSelector((state) => state.items)
  const item = Object.values(itemsObj)[0]

  const check = () => {
    if (!user) {
      return false
    }
    if (user.id == item?.user_id) {
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
        <AddReview itemId={item?.id}/>
      </div>}
      {reviews?.map((rev) => {
        return (
        <div key={rev.id} className="review">
          <p>{`${rev?.rating}`} <i className="fa-solid fa-star"></i></p>
          <p>{`${rev?.created_at}`}</p>
          <p>{`${rev?.review}`}</p>
          { user && user.id == rev.user_id &&
          <>
          <div className="edit-button">
            <EditReview reviewId={rev.id} itemId={item?.id} change={change} review={rev}/>
          </div>
          <div className="delete-button">
            <DeleteReview reviewId={rev.id} itemId={item?.id} change={change}/>
          </div>
          </>}

        </div>
        )
      })}
    </div>
  )
}



export default Reviews
