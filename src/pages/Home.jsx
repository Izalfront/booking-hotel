// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/home.css';
import Slider from 'react-slick';
import CarouselCard from '../component/Card-carousel/CarouselCard';
import Konten from '../component/Konten/Konten';
import Akomodasi from '../component/Akomodasi/Akomodasi';
import { Container, Row, Col } from 'reactstrap';
// import img
import Kamar from '../../src/assets/img/kamar.jpg';
import Kolam from '../../src/assets/img/kolam renang.jpg';
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
          <Slider {...settings} className="slider__bg">
            <div className="img__child">
              <img src={Kamar} alt="" />
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
            {/* <div className="white__bg"></div> */}
          </Slider>
        </div>
      </div>
      {/* ======= end ======= */}
      <section className="flex">
        <h1 className="flex text-center pelayanan__title">Pelayanan Kami</h1>
        <Container>
          <Row>
            <Col className="carousel-container ">
              <CarouselCard />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ======= start content ========= */}
      <section>
        <Col className="konten-container">
          <Konten />
        </Col>
      </section>
      {/* ======= start akomodasi ======== */}
      <section>
        <Akomodasi />
      </section>
    </>
  );
};

export default Home;
