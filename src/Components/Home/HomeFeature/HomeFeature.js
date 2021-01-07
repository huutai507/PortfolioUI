import React from "react";
import "./HomeFeature.css";

function HomeFeature() {
  return (
    <div className="home__feature">
      <div className="container">
        <h4 className="home__feature__title">Featured works</h4>
        <ul className="home__feature__list">
          <li className="home__feature__item">
            <div className="home__feature__item-img">
              <img
                src="https://cdn.dribbble.com/users/671617/screenshots/13673352/media/cc0c6771534b53b1bbccd77a95825d89.jpg"
                alt="Img"
                className="feature__img"
              />
            </div>
            <div className="home__feature__item__info">
              <h2 className="home__feature__item__info__title">
                Designing Dashboards
              </h2>
              <div className="home__feature__item__info--year">
                <p className="out--year">2020</p>
                <p className="brand--name">Dashboard</p>
              </div>
              <p className="home__feature__item__desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </li>
          <li className="home__feature__item">
            <div className="home__feature__item-img">
              <img
                src="https://cdn.dribbble.com/users/671617/screenshots/13673352/media/cc0c6771534b53b1bbccd77a95825d89.jpg"
                alt="Img"
                className="feature__img"
              />
            </div>
            <div className="home__feature__item__info">
              <h2 className="home__feature__item__info__title">
                Designing Dashboards
              </h2>
              <div className="home__feature__item__info--year">
                <p className="out--year">2020</p>
                <p className="brand--name">Dashboard</p>
              </div>
              <p className="home__feature__item__desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </li>
          <li className="home__feature__item">
            <div className="home__feature__item-img">
              <img
                src="https://cdn.dribbble.com/users/671617/screenshots/13673352/media/cc0c6771534b53b1bbccd77a95825d89.jpg"
                alt="Img"
                className="feature__img"
              />
            </div>
            <div className="home__feature__item__info">
              <h2 className="home__feature__item__info__title">
                Designing Dashboards
              </h2>
              <div className="home__feature__item__info--year">
                <p className="out--year">2020</p>
                <p className="brand--name">Dashboard</p>
              </div>
              <p className="home__feature__item__desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeFeature;
