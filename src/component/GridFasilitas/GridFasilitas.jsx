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
            <p className="sub__head">{item.sub__head}</p>
            <p>{item.desc}</p>
            <a href="#">Reservasi</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default GridFasilitas;
