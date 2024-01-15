// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/home.css';
import Slider from 'react-slick';
// import img
import image1 from '../../../src/assets/img/image1.jpg';
import image2 from '../../../src/assets/img/image2.jpg';
import image3 from '../../../src/assets/img/image3.jpg';
import image4 from '../../../src/assets/img/image4.jpg';
import image5 from '../../../src/assets/img/image5.jpg';
const CarouselCard = () => {
  const carouselData = [
    { title: 'Card 1', description: 'Description 1', image: image1 },
    { title: 'Card 2', description: 'Description 2', image: image2 },
    { title: 'Card 3', description: 'Description 3', image: image3 },
    { title: 'Card 4', description: 'Description 4', image: image4 },
    { title: 'Card 5', description: 'Description 5', image: image5 },
  ];

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
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div className="carousel-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCard;
