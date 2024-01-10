// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Routers from '../../router/Routers';
const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
