import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css"
import { useNavigate } from "react-router-dom";
function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
    navigate('/')
  };

  return (
    <>
      <div onMouseEnter={() => setShowMenu(true)} className="profile-button">
        {/* <i className="fas fa-user-circle" /> */}
        <div className="profile-greeting-container">
          <p className="profile-greeting"> {user ? (`Hello, ${user?.username}`) : `Hello, Guest`} </p>
          <p className="profile-greeting profile-greeting-label"> Account & List </p>
        </div>
        <i className="fa-solid fa-caret-down"></i>
      </div>
      {showMenu && (
        <ul className={"profile-dropdown"} ref={ulRef} onMouseLeave={closeMenu}>
          {user ? (
            <>
              <span className="profile-user-info">{user.username}</span>
              <span className="profile-user-info">{user.email}</span>
              <span><hr /></span>
              <span className="profile-user-info list-item" onClick={() => {navigate(`/my-products`); closeMenu()}}>Manage Products</span>
              <span className="profile-user-info list-item" onClick={() => {navigate(`/new-product`); closeMenu()}}>Create Product Listing</span>
              <span><hr /></span>
              <span className="button-divider">
                <button onClick={logout} className="logout-button">Log Out</button>
              </span>
            </>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </>
          )}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
