import "./ItemTile.css"

function ItemTile({item}) {
  return (
    <div className="item-tile-container">
      <img src={`${item.image}`} className="item-image"/>
      <div className="item-info">
        <p>{item.name}</p>
        <p>$ {item.price}</p>
      </div>
    </div>
  )
}

export default ItemTile;
