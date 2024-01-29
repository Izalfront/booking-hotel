// eslint-disable-next-line no-unused-vars
import React from 'react';
import './layananbisnis.css';
import { BiCog } from 'react-icons/bi';
import { BiChalkboard } from 'react-icons/bi';
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
    </>
  );
};

export default LayananBisnis;
