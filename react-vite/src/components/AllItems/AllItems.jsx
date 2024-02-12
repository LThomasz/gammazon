import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadItemsThunk } from "../../redux/item"
import "./AllItems.css"
import ItemTile from "../ItemTile/ItemTile";

function AllItems() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const itemsObj = useSelector((state) => state.items)
  const items = Object.values(itemsObj)

  useEffect(() => {
    setTimeout(() => setLoading(false), 300)
    dispatch(loadItemsThunk());
  }, [dispatch])

  if (loading) {
    return null
  }

  return (
    <div className="all-items-main-container">
      <div className="all-items-container">
        <h1>Gammazon All Products</h1>
        <div className="all-items-list">
          {items.map((item) => {
            return (
              <ItemTile key={item.id} item={item}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllItems;
