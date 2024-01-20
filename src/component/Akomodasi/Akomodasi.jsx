// eslint-disable-next-line no-unused-vars
import React from 'react';
import './akomodasi.css';
import Slider from 'react-slick';
// import img
import Kamar from '../../../src/assets/img/kamar.jpg';
import Kolam from '../../../src/assets/img/kolam renang.jpg';
import Rapat from '../../../src/assets/img/ruang rapat.jpg';
const Akomodasi = () => {
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
    <div className="akomodasi__content">
      <h1 className="title__akomodasi">Akomodasi</h1>
      <div className="line"></div>
      <div className="img__background">
        <Slider {...settings} className="slide__bg">
          <div className="img__child" style={{ position: 'relative' }}>
            <div className="h1-background">
              <h1>Luxury Rooms</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, sequi.</p>
              <a href="#">Jelajahi</a>
            </div>
            <img src={Kamar} alt="" />
          </div>

          <div className="img__child" style={{ position: 'relative' }}>
            <div className="h1-background">
              <h1>Serene Pool</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, sequi.</p>
              <a href="#">Jelajahi</a>
            </div>
            <img src={Kolam} alt="" />
          </div>

          <div className="img__child" style={{ position: 'relative' }}>
            <div className="h1-backgroundmeet">
              <h1>Professional Meeting Spaces</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, sequi.</p>
              <a href="#">Jelajahi</a>
            </div>
            <img src={Rapat} alt="" />
          </div>

          <div className="img__child" style={{ position: 'relative' }}>
            <div className="h1-background">
              <h1>Luxury Rooms</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, sequi.</p>
              <a href="#">Jelajahi</a>
            </div>
            <img src={Kamar} alt="" />
          </div>

          <div className="img__child" style={{ position: 'relative' }}>
            <div className="h1-backgroundmeet">
              <h1>Professional Meeting Spaces</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, sequi.</p>
              <a href="#">Jelajahi</a>
            </div>
            <img src={Rapat} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Akomodasi;
