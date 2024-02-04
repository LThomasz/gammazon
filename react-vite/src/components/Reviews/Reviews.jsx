import { useDispatch, useSelector } from "react-redux";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import "./Reviews.css"
import { useNavigate } from "react-router-dom";


function Reviews({reviews}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
