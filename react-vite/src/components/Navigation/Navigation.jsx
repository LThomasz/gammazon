import { NavLink, useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useModal } from "../../context/Modal";
import { useSelector } from "react-redux";
import logo from "../../../images/Gamma (1).png"
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user)
  const navigate = useNavigate();
  const { setModalContent } = useModal();

  const openModal = () => {
    setModalContent(<LoginModal />);
  }

  const notLoggedIn = e => {
    if(!sessionUser) {
      e.preventDefault();
      openModal();
    }
  }

  return (
    // <ul>
    //   <li>
    //     <NavLink to="/">Home</NavLink>
    //   </li>

    //   <li>
    //     <ProfileButton />
    //   </li>
    // </ul>
    <>
      <div className="top-bar">
        <div className="nav-bar">
          <span>
            <img src={logo} alt="" className="page-logo" onClick={() => navigate('/')}/>
          </span>
          <span>
            <ProfileButton />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navigation;
