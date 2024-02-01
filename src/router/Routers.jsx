// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

//import pages component from './pages
import Home from '../pages/Home';
import Akomodasi from '../pages/Akomodasi';
import Penawaran from '../pages/Penawaranspesial';
import Acara from '../pages/RapatAcara';
import DetailPewaran from '../pages/DetailPewaran';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/akomodasi" element={<Akomodasi />} />
      <Route path="/Penawaranspesial" element={<Penawaran />} />
      <Route path="/rapatacara" element={<Acara />} />
      {/* ========= detail halaman ======== */}
      <Route path="/detailpenawaran" element={<DetailPewaran />} />
    </Routes>
  );
};

export default Routers;
