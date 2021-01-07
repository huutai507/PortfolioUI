import React from "react";
import "./HomeNavBar.css";

function HomeNavBar() {
  return (
    <div className="home__header__nav">
      <ul className="home__header__nav-lists">
        <li className="home__header_nav-list-item">
          <a href="/" className="link__nav">
            Works
          </a>
        </li>
        <li className="home__header_nav-list-item">
          <a href="/" className="link__nav">
            Blog
          </a>
        </li>
        <li className="home__header_nav-list-item">
          <a href="/" className="link__nav">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HomeNavBar;
