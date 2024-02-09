import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadUserItemsThunk } from "../../redux/item"
import "./UserItems.css"
import UserItemTile from "../ItemTile/UserItemTile";

function UserItems() {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const itemsObj = useSelector((state) => state.items)
  const user = useSelector((state) => state.session.user)
  const items = Object.values(itemsObj)

  const changeState = () => {
    setState(!state);
  }

  useEffect(() => {
    dispatch(loadUserItemsThunk(user.id));
  }, [dispatch, state])

  return (
    <div className="all-useritems-main-container">
      <div className="all-useritems-container">
        <h1>My Product listings</h1>
        <div className="all-useritems-list">
          {items.map((item) => {
            return (
              // <NavLink to={`/products/${item.id}/edit`} state={{fromUI: {item}}}>
                <UserItemTile key={item.id} item={item} change={changeState}/>
              // </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UserItems;
