// eslint-disable-next-line no-unused-vars
import React from 'react';
import './gridrapat.css';
import datarapat from './datarapat.json';
import { BiBook } from 'react-icons/bi';
import Slider from 'react-slick';

const GridRapat = () => {
  const settings = {
    dots: false,
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
          dots: false,
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

  const planningTools = ['Layouts & Capacities', 'Meeting Planning Guide', 'Planning Timeline', 'Expense Checklist'];

  return (
    <section>
      <div className="planning__tools">
        <div className="grid__container">
          <div className="desc__rapat">
            <h1>Planning Tools</h1>
            <div className="line__1"></div>
            <div className="document__rapat">
              {planningTools.map((doc, index) => (
                <div className="doc__1" key={index}>
                  <BiBook size={28} />
                  <p style={{ paddingLeft: '1rem' }}>{doc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* ======== start grid slider ======== */}
          <div className="img__rapat">
            <Slider {...settings} className="slider__bg">
              {datarapat.map((item, index) => (
                <div className="img" key={index}>
                  <img src={item.image} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridRapat;
