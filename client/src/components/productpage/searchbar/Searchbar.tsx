import React from "react";
import "./searchbar.scss";
import { BsSearch } from "react-icons/bs";

function Searchbar() {
  return (
    <div className="searchbar-wrapper">
      <hr className="top-bar" />

      <ul className="searchbar-list">
        <li>New</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <div className="input-wrapper">
          <input type="text" placeholder="Search..."></input>
          <BsSearch className="search-icon" />
        </div>
      </ul>

      <hr className="bottom-bar" />
    </div>
  );
}

export default Searchbar;
