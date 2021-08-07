import React from "react";
import "./Header.css";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { white } from "@material-ui/core/colors";
function Header() {
  return (
    <nav className="navigation">
      <div className="container__header">
        <span className="logo">Fashioo</span>
        <ul className="nav">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">CONSULTANCY</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>

          <li>
            <a href="#">ABOUT</a>
          </li>

          <li>
            <a href="#">E-COMMERCE</a>
          </li>
        </ul>
        <div className="icon">
          <ShoppingCartOutlinedIcon style={{ color: "white" }} />
        </div>
        <div className="icon">
          <AccountCircleOutlinedIcon style={{ color: "white" }} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
