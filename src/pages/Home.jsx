// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/home.css';
import Slider from 'react-slick';
// import img
import Kamar from '../../src/assets/img/kamar.jpg';
import Kolam from '../../src/assets/img/kolam renang.jpg';
import Acara from '../../src/assets/img/ruang acara.jpg';
import Bermain from '../../src/assets/img/ruang bermain.jpg';
import Rapat from '../../src/assets/img/ruang rapat.jpg';
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* ======== hero section start ========== */}

      <div className="hero__content">
        <div className="img__background">
          <Slider {...settings}>
            <div className="img__child">
              <img src={Kamar} alt="" />
            </div>

            <div className="img__child">
              <img src={Kolam} alt="" />
            </div>

            <div className="img__child">
              <img src={Acara} alt="" />
            </div>

            <div className="img__child">
              <img src={Bermain} alt="" />
            </div>

            <div className="img__child">
              <img src={Rapat} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
