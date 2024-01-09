// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

//import pages component from './pages

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" replace />} />
    </Routes>
  );
};

export default Routers;
