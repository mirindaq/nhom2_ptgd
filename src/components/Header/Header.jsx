import React from "react";
import "./Header.css";
import { Link } from "react-router";
import { path } from "../../constants/path";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <Link to={path.homepage}>
            <img src="/images/chefify.png" />
          </Link>
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Tìm kiếm" />
        </div>
        <div className="navigation-container">
          <ul>
            <Link to={path.products}>What to cook</Link>
            <Link to={path.recipes}>Recipes</Link>
            <Link to={path.productsSearch}>Product Search</Link>
            <li>Occasions</li>
            <Link to={path.about}>About Us</Link>
          </ul>
        </div>

        <div className="information-box">
          <div className="recipe-box">
            <span className="text">Your Recipe Box</span>
          </div>

          <div className="avatar-container">
            <img src="/images/avatar.png" alt="Avatar" />
          </div>
        </div>
      </div>
    </>
  );
}
