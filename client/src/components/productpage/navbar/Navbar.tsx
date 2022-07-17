import React from "react";
import "./navbar.scss";
import { BiUser, BiHeart } from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/ri";
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">Kurio.</h1>
      <ul className="navbar-list">
        <li>
          <BiUser />
          My Account
        </li>
        <li>
          <BiHeart />
          Favourites
        </li>

        <li>
          <RiShoppingBagLine />
          Bag
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
