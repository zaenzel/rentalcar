import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderTesti.css";

const SliderTesti = () => {
  const settings = {
    className: "wrap-slide",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "240px",
    speed: 500,
    slidesToScroll: 1,
    slideToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slideToShow: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="" id="testimonial">
      <div className="title-testi">
        <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <Slider {...settings}>
        <div className="card-carousel">
          <div className="card-item">
            <div className="image">
              <img src="/images/gondrong.png" className="w-20" />
            </div>
            <div className="text">
              <h1 className="coment-name">Bang Gondrong</h1>
              <p className="coment">
                “sewa disini proses garibet, mudah, dan cepat“
              </p>
            </div>
          </div>
        </div>
        <div className="card-carousel">
          <div className="card-item">
            <div className="image">
              <img src="/images/chizuru.jpg" className="w-20" />
            </div>
            <div className="text">
              <h1 className="coment-name">chizuru11221</h1>
              <p className="coment">
                “mobilnya bagus-bagus dan murah lagi. ga kapok deh sewa disini"
              </p>
            </div>
          </div>
        </div>
        <div className="card-carousel">
          <div className="card-item">
            <div className="image">
              <img src="/images/gondrong.png" className="w-20" />
            </div>
            <div className="text">
              <h1 className="coment-name">Bang Gondrong</h1>
              <p className="coment">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
        <div className="card-carousel">
          <div className="card-item">
            <div className="image">
              <img src="/images/gondrong.png" className="w-20" />
            </div>
            <div className="text">
              <h1 className="coment-name">Bang Gondrong</h1>
              <p className="coment">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
        <div className="card-carousel">
          <div className="card-item">
            <div className="image">
              <img src="/images/gondrong.png" className="w-20" />
            </div>
            <div className="text">
              <h1 className="coment-name">Bang Gondrong</h1>
              <p className="coment">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderTesti;
