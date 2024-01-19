// eslint-disable-next-line no-unused-vars
import React from 'react';
import './konten.css';
// import img from assest
import Kamar from '../../assets/img/kamar.jpg';
const Konten = () => {
  const desc1 =
    'Crowne Plaza® Bandung merupakan hotel bintang 5 yang berlokasi di pusat Kota Bandung, berjarak sangat dekat dari area bisnis dan situs sejarah kota. Dilengkapi dengan 270 kamar termasuk 37 kamar suites serta 19 ruang meeting dengan 1 Grand Ballroom, 3 restoran dan fasilitas pendukung lainnya seperti kolam renang, pusat kebugaran, juga tempat bermain anak dan spa yang semuanya berlokasi terpusat di lantai 5. Semua fasilitas ini tertata dengan apik di gedung dengan ketinggian 23 lantai.';

  return (
    <>
      <div className="konten__1">
        <div className="image_konten">
          <img src={Kamar} alt="" />
        </div>
        <div className="desc__konten1">
          <p className="judul__konten1">CROWNE PLAZA BANDUNG</p>
          <p className="desc__konten1">{desc1}</p>
        </div>
      </div>
    </>
  );
};

export default Konten;
