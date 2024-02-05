import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { loadUserItemsThunk } from "../../redux/item"
import "./UserItems.css"
import ItemTile from "../ItemTile/ItemTile";

function UserItems() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsObj = useSelector((state) => state.items)
  const user = useSelector((state) => state.session.user)
  const items = Object.values(itemsObj)

  useEffect(() => {
    dispatch(loadUserItemsThunk(user.id));
  }, [dispatch])

  return (
    <div className="all-items-container">
      <h1>My Product listings</h1>
      <div className="">
        {items.map((item) => {
          return (
            <NavLink to={`/products/${item.id}/edit`} state={{fromUI: {item}}}>
              <ItemTile key={item.id} item={item}/>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default UserItems;
