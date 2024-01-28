// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import rapat from './datarapat.json';
import './rapat.css';
const HeadRapat = () => {
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
      <div className="head__titles">
        <h2>Work, Reconnect, and Celebrate</h2>
        <h1>IN THE HEART OF BANDUNG CITY</h1>
      </div>
      <div className="rapat">
        <div className="hero__content">
          <div className="img__background">
            <Slider {...settings} className="slider__bg">
              {rapat.map((item, index) => (
                <div className="img__child" key={index}>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* ======== desc meeting and event start ======= */}
      <section>
        <div className="description">
          <h1>MEETING DAN EVENT</h1>
          <div className="line"></div>
          <p>
            Nikmati fasilitas ruang meeting dan Grand Ballroom kami yang terletak di area khusus yaitu di lantai 2 dan 3. Juga temukan ruang meeting tertinggi di Kota Bandung yang berada di lantai 23 Crowne Plaza Bandung, bernama Amethyst
            Meeting Room, dimana Anda dapat menikmati pemandangan kota dari ketinggian saat melangsungkan acara.
            <br />
            Ruang meeting dengan fasilitas partition dapat Anda manfaatkan untuk menyelenggarakan berbagai acara perusahaan dan acara sosial. Seluruh fasilitas ruang meeting pun dilengkapi dengan fasilitas modern dan cahaya alami.
            <br />
            Crowne Plaza Meeting Director juga akan membantu Anda untuk mewujudkan acara yang tak terlupakan dan sesuai dengan kebutuhan Anda.
            <br />
            Kami akan mengatur kebutuhan Anda secara detail sehingga Anda dapat fokus pada rancangan besarnya.
          </p>
          <a href="#" className="btn__meminta">
            MEMINTA PENAWARAN.
          </a>
        </div>
      </section>
    </>
  );
};

export default HeadRapat;
