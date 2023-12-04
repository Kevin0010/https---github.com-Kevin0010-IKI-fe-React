import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/IKI.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "#3498db", color: "#fff", width: "100%" }}
    >
      <div className="navbar-brand">
        <NavLink to={"/dashboard"} className="navbar-item">
          <img src={logo} width="50" height="20" alt="logo" />
        </NavLink>

        <a
          href="!#"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button
                onClick={logout}
                className="button is-light is-fullwidth-mobile"
                style={{ backgroundColor: "#000", color: "#fff" }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
