// import { useNavigate } from "react-router-dom";
// import shopping from "../../../images/shopping.png"
import "./Navigation.css"
import OpenModalButton from "../OpenModalButton/OpenModalButton";
function  CartButton() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="cart-link-container">
        {/* <img src={shopping} alt="" className="shopping-cart" onClick={() => navigate('/cart')}/> */}
        <OpenModalButton
          buttonText={"Cart"}
          modalComponent={
            <div style={{height: '40px', width: '180px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>
              <p>Feature Coming Soon</p>
            </div>
          }
        ></OpenModalButton>
      </div>
    </>
  )
}

export default CartButton;
