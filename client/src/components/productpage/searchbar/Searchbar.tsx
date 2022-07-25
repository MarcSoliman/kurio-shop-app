import React from "react";
import "./searchbar.scss";
import { BsSearch } from "react-icons/bs";

function Searchbar() {
  return (
    <div className="searchbar-wrapper">
      <ul className="searchbar-list">
        <li>New</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="input-wrapper">
        <input type="text" placeholder="Search..."></input>
        <BsSearch className="search-icon" />
      </div>
    </div>
  );
}

export default Searchbar;
