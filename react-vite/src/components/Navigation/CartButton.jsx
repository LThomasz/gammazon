import { useNavigate } from "react-router-dom";
import shopping from "../../../images/shopping.png"
import "./Navigation.css"

function  CartButton() {
  const navigate = useNavigate();

  return (
    <>
      <div className="cart-link-container">
        <img src={shopping} alt="" className="shopping-cart" onClick={() => navigate('/cart')}/>
      </div>
    </>
  )
}

export default CartButton;
