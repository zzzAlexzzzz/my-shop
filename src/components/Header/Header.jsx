import React from "react";
import "./header.scss";
import Sort from "../Sort/Sort";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div>
          <h1>Video Game Shop</h1>
        </div>
        <div className="header__cart">
          <a href="/" className="button--cart">
            Корзина
          </a>
        </div>
        <Sort />
      </div>
    </div>
  );
}
export default Header;
