// eslint-disable-next-line no-unused-vars
import React from 'react';
import Akomodasi from '../component/Akomodasi/Akomodasi';
import GridAkomodasi from '../component/GridAkomodasi/GridAkomodasi';
const AkomodasiPage = () => {
  return (
    <>
      <Akomodasi />
      {/* ====== start akomodasi page ======= */}
      <section>
        <GridAkomodasi />
      </section>
    </>
  );
};

export default AkomodasiPage;
