import { useNavigate } from "react-router-dom";
import "./ItemTile.css"

function ItemTile({item}) {
  const navigate = useNavigate();
  return (
    <div className="item-tile-container" onClick={() => navigate(`/products/${item.id}`)}>
      <img src={`${item.image}`} className="item-image"/>
      <div className="item-info">
        <p>{item.name}</p>
        <p>$ {Number(item?.price).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ItemTile;
