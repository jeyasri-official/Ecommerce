import React, { useState } from "react";
import "./style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMode } from "./Modecontext.js";

const Navbar = () => {
  const { mode, setmode } = useMode();
  const navigate = useNavigate();
  const gotosignin = () => {
    navigate("/signin");
  };
  function changethemode() {
    setmode(!mode);
  }

  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const isExpanded = focused || value.length > 0;
  return (
    <>
      <div className="Nav">
        <div className="navlist">
          <div className="navitems">
            <img className="logo" src="/logo3.png" alt="" />
            <Link className="home text" to="/">
              Home
            </Link>
            <Link className="cart text" to="/cart">
              My Cart <i className="fa fa-shopping-cart"></i>
            </Link>
            <Link className="wishlist text" to="/wishlist">
              <i className="fa fa-heart-o"></i>
            </Link>
            <div className={`search text ${isExpanded ? "expanded" : ""}`}>
              <input
                type="text"
                className={`search-input ${isExpanded ? "expanded" : ""}`}
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
              <button className="search_button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="right-nav">
            <button onClick={changethemode} className={`mode`}>
              <img src="/mode.png" />
            </button>
            <button onClick={gotosignin} className="signIn">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
