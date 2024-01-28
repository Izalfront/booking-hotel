// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import HeadPenawaran from './penawaran.json';
import './penawaran.css';
const PenawaranSpesial = () => {
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
      <div className="head__title">
        <h2>Bekerja, Terhubung dan Merayakan</h2>
        <h1 style={{ fontSize: '4rem' }}>DI PUSAT KOTA BANDUNG</h1>
      </div>
      <div className="hero__content">
        <div className="img__background">
          <Slider {...settings} className="slider__bg">
            {HeadPenawaran.map((item, index) => (
              <div className="img__child" key={index}>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default PenawaranSpesial;
