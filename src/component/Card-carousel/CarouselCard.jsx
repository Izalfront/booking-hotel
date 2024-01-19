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
    { title: 'Premium Suite', description: 'Suite kamar yang nyaman dengan fasilitas premium.', image: image1 },
    { title: 'Deluxe Room', description: 'Kamar mewah dengan pemandangan indah.', image: image2 },
    { title: 'Executive Room', description: 'Kamar eksklusif untuk pengalaman menginap yang istimewa.', image: image3 },
    { title: 'Family Villa', description: 'Villa besar untuk keluarga dengan suasana yang hangat.', image: image4 },
    { title: 'Ocean View Penthouse', description: 'Penthouse dengan pemandangan laut yang menakjubkan.', image: image5 },
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
      <Slider {...settings} className="slider__card">
        {carouselData.map((item, index) => (
          <div className="carousel-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCard;
