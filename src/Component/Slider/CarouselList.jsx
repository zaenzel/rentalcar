import React from "react";
import "./CarouselList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="card-wrap">
          <div className="card-item-list">
            <div className="images-wrap-calouselList">
              <img src="/images/mobilkeluarga.jpg" className="image-carousel-list" />
            </div>
            <div className="text-carousel-list">
              <h1>Rentalin</h1>
              <h3>Solusi kkebutuhan anda untuk perjalanan</h3>
            </div>
          </div>
        </div>
        <div className="card-wrap">
          <div className="card-item-list">
            <div className="images-wrap-calouselList">
              <img src="/images/mobilkeluarga.jpg" className="image-carousel-list" />
            </div>
            <div className="text-carousel-list">
              <h1>Rentalin</h1>
              <h3>Solusi kkebutuhan anda untuk perjalanan</h3>
            </div>
          </div>
        </div>
        <div className="card-wrap">
          <div className="card-item-list">
            <div className="images-wrap-calouselList">
              <img src="/images/mobilkeluarga.jpg" className="image-carousel-list" />
            </div>
            <div className="text-carousel-list">
              <h1>Rentalin</h1>
              <h3>Solusi kkebutuhan anda untuk perjalanan</h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselList;
