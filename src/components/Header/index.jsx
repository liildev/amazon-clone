import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../../context/StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { logo, menu, close } from "../../assets";

import "./header.scss";

export default function Header() {
  const [{ basket, user }] = useStateValue();
  const [toggle, setToggle] = useState(false);
  
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__search__input" />
        <SearchIcon className="header__search__icon" />
      </div>

      <img
        src={toggle ? close : menu}
        alt="Menu"
        className="header__toggler"
        onClick={() => setToggle(!toggle)}
      />

      <nav className={toggle ? "header__nav active" : "header__nav"}>
        <ul className="menu">
          <li className="menu__list">
            <Link
              to={!user && "/login"}
              className="menu__list__option"
              onClick={handleAuthenticaton}
            >
              <span className="menu__list__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="menu__list__optionLineTwo">
                {!user ? "Sign In" : "Sign Out"}
              </span>
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/orders" className="menu__list__option">
              <span className="menu__list__optionLineOne">Returns</span>
              <span className="menu__list__optionLineTwo">& Orders</span>
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/prime" className="menu__list__option">
              <span className="menu__list__optionLineOne">Your</span>
              <span className="menu__list__optionLineTwo">Prime</span>
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/checkout" className="menu__list__optionBasket">
              <ShoppingBasketIcon />
              <span className="menu__list__optionLineTwo">
                {basket?.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
