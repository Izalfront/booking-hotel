// eslint-disable-next-line no-unused-vars
import React from 'react';
import './grid.css';
// import img
import Rapat from '../../../src/assets/img/ruang rapat.jpg';
import Bermain from '../../../src/assets/img/ruang bermain.jpg';
const Grid = () => {
  return (
    <div className="content__grid">
      {/* ==== grid 1 ===== */}
      <div className="grid__1">
        <div>
          <div className="desc__1">
            <p>Ruang Rapat</p>
          </div>
          <div className="line1" style={{ marginLeft: '11rem', marginRight: '20rem', marginBottom: '0', paddingBottom: '0' }}></div>
          <div className="desc__detail">
            <div className="isi__1">
              <p>Dapatkan informasi lebih lanjut mengenai ruang pertemuan kami yang berlokasi di lantai khusus, dilengkapi ruangan meeting dengan berbagai ukuran.</p>
            </div>
            <a href="#" className="btn__jelajahi">
              Jelajahi
            </a>
          </div>
        </div>
        <div className="img__content">
          <img src={Rapat} alt="" />
        </div>
      </div>
      {/* ===== grid 2 ===== */}
      <div className="grid__1">
        <div className="img__content2">
          <img src={Bermain} alt="" />
        </div>
        <div>
          <div className="desc__2">
            <p>Ruang Bermain</p>
          </div>
          <div className="line2" style={{ margin: '0', width: '15%', marginTop: '2rem', marginBottom: '0' }}></div>
          <div className="desc__detail2">
            <div className="isi__2">
              <p>Dapatkan informasi lebih lanjut mengenai ruang pertemuan kami yang berlokasi di lantai khusus, dilengkapi ruangan meeting dengan berbagai ukuran.</p>
            </div>
            <a href="#" className="btn__jelajahi">
              Jelajahi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
