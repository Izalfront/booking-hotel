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
            <img src={Kamar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <h1 className="h1-background">hello</h1>
          </div>

          <div className="img__child">
            <img src={Kolam} alt="" />
          </div>

          <div className="img__child">
            <img src={Rapat} alt="" />
          </div>

          <div className="img__child">
            <img src={Kamar} alt="" />
          </div>

          <div className="img__child">
            <img src={Rapat} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Akomodasi;
