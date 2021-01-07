import React from "react";
import "./HomeRecentPost.css";

function HomeRecentPost() {
  return (
    <div className="home__recent__posts">
      <div className="container">
        <div className="home__recent__post">
          <p className="home__recent__post__title">Recent posts</p>
          <a href="/" className="home__recent__post__link">
            View all
          </a>
        </div>
        <div className="home__recent__post">
          <ul className="home__recent__post_lists">
            <li className="home__recent__post__items">
              <div className="home__recent__post__item__info__details">
                <h3 className="home__recent__post__item-title">
                  Making a design system from scratch
                </h3>
                <p className="home__recent__post__item-info-posted">
                  12 Feb 2020 <span>|</span> Design, Pattern
                </p>
                <p className="home__recent__post__item-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </li>
            <li className="home__recent__post__items">
              <div className="home__recent__post__item__info__details">
                <h3 className="home__recent__post__item-title">
                  Making a design system from scratch
                </h3>
                <p className="home__recent__post__item-info-posted">
                  12 Feb 2020 <span>|</span> Design, Pattern
                </p>
                <p className="home__recent__post__item-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeRecentPost;
