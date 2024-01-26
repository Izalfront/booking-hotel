// eslint-disable-next-line no-unused-vars
import React from 'react';
import Akomodasi from '../component/Akomodasi/Akomodasi';
import GridAkomodasi from '../component/GridAkomodasi/GridAkomodasi';
import Amenities from '../component/Amenities/Amenities';
const AkomodasiPage = () => {
  return (
    <>
      <Akomodasi />
      {/* ====== start akomodasi page ======= */}
      <section>
        <GridAkomodasi />
      </section>
      {/* ======= start fasilitas ======== */}
      <section>
        <Amenities />
      </section>
    </>
  );
};

export default AkomodasiPage;
