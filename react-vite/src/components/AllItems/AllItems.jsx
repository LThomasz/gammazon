import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loadItemsThunk } from "../../redux/item"
import "./AllItems.css"
import ItemTile from "../ItemTile/ItemTile";

function AllItems() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsObj = useSelector((state) => state.items)
  const items = Object.values(itemsObj)

  useEffect(() => {
    dispatch(loadItemsThunk());
  }, [dispatch])

  return (
    <div className="all-items-container">
      <h1>Gammazon All Products</h1>
      <div className="">
        {items.map((item) => {
          return (
            <ItemTile key={item.id} item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default AllItems;
