import { NavLink } from "react-router-dom";
import "./UserItemTile.css"
import DeleteUserItem from "../UserItems/DeleteUserItem";
function UserItemTile({item, change}) {

  return (
    <div className="useritem-tile-container">
      <img src={`${item.image}`} className="useritem-image"/>
      <div className="useritem-info">
        <p className="useritem-name">{item.name}</p>
        <p>$ {Number(item?.price).toFixed(2)}</p>
      </div>
      <div className="useritem-button-div">
        <NavLink to={`/products/${item.id}/edit`} state={{fromUI: {item}}}>
          <button className="useritem-edit-button">Edit</button>
        </NavLink>
        <DeleteUserItem itemId={item.id} change={change}/>
      </div>
    </div>
  )
}

export default UserItemTile;
