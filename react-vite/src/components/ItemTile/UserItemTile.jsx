import { NavLink, useNavigate } from "react-router-dom";
import "./UserItemTile.css"
import DeleteUserItem from "../UserItems/DeleteUserItem";
function UserItemTile({item}) {
  const navigate = useNavigate();
  return (
    <div className="useritem-tile-container">
      <img src={`${item.image}`} className="useritem-image"/>
      <div className="useritem-info">
        <p>{item.name}</p>
        <p>$ {item.price}</p>
      </div>
      <div>
        <NavLink to={`/products/${item.id}/edit`} state={{fromUI: {item}}}>
          <button>Edit</button>
        </NavLink>
        <DeleteUserItem itemId={item.id}/>
      </div>
    </div>
  )
}

export default UserItemTile;
