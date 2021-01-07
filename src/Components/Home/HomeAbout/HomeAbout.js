import React from "react";
import "./HomeAbout.css";

function HomeAbout() {
  return (
    <div className="home__about">
      <div className="home__about__info">
        <h1 className="home__about__info__title">
          Hi, I am John, Creative Technologist
        </h1>
        <p className="home__about__info__details">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="home__about__info__button">
          <a href="/" class="btn__about">
            Download Resume
          </a>
        </div>
      </div>
      <div className="home__about__img">
        <img
          src="https://cdn.dribbble.com/users/759083/screenshots/14857103/media/9403620d013d9f73ea359a1ed874b76b.png"
          alt=""
          className="home__about__img--circle"
        />
      </div>
    </div>
  );
}

export default HomeAbout;
