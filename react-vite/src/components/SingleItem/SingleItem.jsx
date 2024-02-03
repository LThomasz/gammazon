import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { loadOneItemThunk } from "../../redux/item"
import './SingleItem.css'

function SingleItem() {
  const {productId} = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsObj = useSelector((state) => state.items)
  const item = Object.values(itemsObj)[0]
  console.log(item)
  useEffect(() => {
    dispatch(loadOneItemThunk(productId))
  }, [dispatch])

  return (
    <div className="single-main-container">
      <div className="single-child-container">
        <div className="single-image-container">
          <img src={`${item?.image}`} alt="" />
        </div>
        <div className="single-info-container">
          <h2>{`${item?.name}`}</h2>
          <h3>{`${item?.created_at}`}</h3>
          {/* ratings should go here */}
          <p>{`${item?.description}`}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleItem
