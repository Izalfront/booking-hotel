// eslint-disable-next-line no-unused-vars
import React from 'react';
import './gridfasilitas.css';
import gridfasilitas from './gridfasilitas.json';

const GridFasilitas = () => {
  return (
    <>
      {gridfasilitas.map((item, index) => (
        <div className="container__grid" key={index}>
          <div className="img__grid">
            <img src={item.image} alt={item.head} />
          </div>
          <div className="desc__grid">
            <h1>{item.head}</h1>
            <div className="line"></div>
            <p className="sub__head">{item.sub__head}</p>
            <p>{item.desc}</p>
            <a href="/detailpenawaran">Reservasi</a>
          </div>
        </div>
      ))}
      <div className="penawaran">
        <h1>PENAWARAN SPESIAL</h1>
        <p>
          Promo-promo eksklusif untuk melengkapi pengalaman menginap Anda di Crowne Plaza Bandung. Berbagai promo mulai dari penawaran buffet dinner yang lezat, paket wedding spesial, hingga paket spa di Uluwatu Bali Spa, akan menjadi
          penawaran yang sangat menarik.
          <br />
          Nikmati berbagai promo hotel terbaik di Bandung dan miliki pengalaman tak terlupakan di Crowne Plaza Bandung
        </p>
      </div>
    </>
  );
};

export default GridFasilitas;
