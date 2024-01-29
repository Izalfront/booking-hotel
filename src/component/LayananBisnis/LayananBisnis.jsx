// eslint-disable-next-line no-unused-vars
import React from 'react';
import './layananbisnis.css';
import { BiCog } from 'react-icons/bi';
import { BiChalkboard } from 'react-icons/bi';
import { BiDetail } from 'react-icons/bi';
import { BiAlarm } from 'react-icons/bi';
import { BiStreetView } from 'react-icons/bi';
import { BiStar } from 'react-icons/bi';
const LayananBisnis = () => {
  return (
    <>
      <div className="grid__layananbisnis">
        <div className="service__bisnis">
          <BiCog size={80} style={{ opacity: '0.5' }} />
          <p>LAYANAN BISNIS</p>
          <a href="#" className="btn__lebih">
            lebih
          </a>
        </div>
        <div className="peralatan__bisnis">
          <BiChalkboard size={80} style={{ opacity: '0.5' }} />
          <p>PERALATAN DAN PERLENGKAPAN PENUNJANG ACARA</p>
          <a href="#" className="btn__lebih">
            lebih
          </a>
        </div>
      </div>
      {/* ======== layanan favorit ========= */}
      <section className="layanan__favorit">
        <h3>4 FITUR YANG AKAN SANGAT ANDA SUKAI</h3>
        <div className="line"></div>
        <div className="content__layanan">
          <div className="meeting__direktor">
            <BiStreetView size={80} style={{ opacity: '0.5', marginRight: '100px' }} />
          </div>
          <div className="response__bisnis">
            <BiAlarm size={80} style={{ opacity: '0.5', marginRight: '100px' }} />
          </div>
          <div className="daily__meeting">
            <BiDetail size={80} style={{ opacity: '0.5', marginRight: '100px' }} />
          </div>
          <div className="meeting__service">
            <BiStar size={80} style={{ opacity: '0.5' }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default LayananBisnis;
