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
          <div className="meeting__service">
            <BiStreetView size={80} style={{ opacity: '0.5' }} />
            <p className="sub__favorite">Khan Place® Meeting Director</p>
            <p className="desc__favorite">Narahubung yang berdedikasi penuh untuk menjamin kelancaran seluruh acara Anda. Kami menangani semua acara Anda dengan rinci, sehingga Anda dapat fokus pada hal yang lebih besar.</p>
          </div>
          <div className="meeting__service">
            <BiAlarm size={80} style={{ opacity: '0.5' }} />
            <p className="sub__favorite">Two-hour response guarantee</p>
            <p className="desc__favorite">Dalam waktu dua jam, kami akan merespon permintaan Anda mengenai ketersediaan ruang rapat, dan ketersediaan tanggal.</p>
          </div>
          <div className="meeting__service">
            <BiDetail size={80} style={{ opacity: '0.5' }} />
            <p className="sub__favorite">Daily meetings debrief</p>
            <p className="desc__favorite">Melalui layanan kami, kami dapat memberi Anda daftar terperinci dari rincian biaya harian acara Anda, sehingga Anda dapat mengelola anggaran secara efektif secara real-time.</p>
          </div>
          <div className="meeting__service">
            <BiStar size={80} style={{ opacity: '0.5' }} />
            <p className="sub__favorite">Meetings Service Excellence</p>
            <p className="desc__favorite">Dinilai oleh para pelaku bisnis pertemuan, sebagai memberikan layanan pertemuan berkualitas tinggi dan kepuasan secara keseluruhan.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayananBisnis;
