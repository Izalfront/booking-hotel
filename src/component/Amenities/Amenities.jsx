// eslint-disable-next-line no-unused-vars
import React from 'react';
import './amenities.css';
import Slider from 'react-slick';
// import data from json
import fasilitas from './amenities.json';
const Amenities = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

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
      <div className="fasilitas">
        <h1>Fasilitas</h1>
        <div className="line"></div>
      </div>
      <div className="carousel-container">
        <Slider {...settings} className="slider__card">
          {fasilitas.map((item, index) => (
            <div className="carousel-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                <a href="#">Jelajahi</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Amenities;
