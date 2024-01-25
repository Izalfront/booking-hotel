// eslint-disable-next-line no-unused-vars
import React from 'react';
import './gridakomodasi.css';
// import data from json
import imageArray from './akomodasiData.json';
const GridAkomodasi = () => {
  return (
    <div className="container__grid">
      {imageArray.map((item, index) => (
        <div className="card1" key={index}>
          <img src={item.image} alt={`Image`} />
          <div className="title">{item.title}</div>
          <div className="caption">{item.caption}</div>
          <div className="button__jelajahi">
            <a href="#">Jelajahi</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridAkomodasi;
