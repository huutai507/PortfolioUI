import React from "react";
import "./HomeFooter.css";

function HomeFooter() {
  return (
    <div className="home__footer">
      <div className="container">
        <div className="home__footer__socials">
          <a href="/">
            <i className="fab fa-linkedin icon-social"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter icon-social"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin icon-social"></i>
          </a>
          <a href="/">
            <i className="fab fa-github icon-social"></i>
          </a>
        </div>
        <p>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  );
}

export default HomeFooter;
