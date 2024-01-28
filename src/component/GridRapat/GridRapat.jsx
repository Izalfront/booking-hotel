// eslint-disable-next-line no-unused-vars
import React from 'react';
import './gridrapat.css';
import Kamar from '../../assets/img/kamar.jpg';
const GridRapat = () => {
  return (
    <>
      <section>
        <div className="planning__tools">
          <div className="grid__container">
            <div className="desc__rapat">
              <h1>Planning Tools</h1>
              <div className="line"></div>
            </div>
            <div className="img__rapat">
              <img src={Kamar} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GridRapat;
