// eslint-disable-next-line no-unused-vars
import React from 'react';
import './gridrapat.css';
import { BiBook } from 'react-icons/bi';
import Kamar from '../../assets/img/kamar.jpg';
const GridRapat = () => {
  return (
    <>
      <section>
        <div className="planning__tools">
          <div className="grid__container">
            <div className="desc__rapat">
              <h1>Planning Tools</h1>
              <div className="line"></div>
              <div className="document__rapat">
                <div className="doc__1">
                  <BiBook size={28} />
                  <p style={{ paddingLeft: '1rem' }}>Layouts & Capacities</p>
                </div>
                <div className="doc__1">
                  <BiBook size={28} />
                  <p style={{ paddingLeft: '1rem' }}>Meeting Planning Guide</p>
                </div>
                <div className="doc__1">
                  <BiBook size={28} />
                  <p style={{ paddingLeft: '1rem' }}>Planning Timeline</p>
                </div>
                <div className="doc__1">
                  <BiBook size={28} />
                  <p style={{ paddingLeft: '1rem' }}>Expense Checklist</p>
                </div>
              </div>
            </div>
            <div className="img__rapat">
              <img src={Kamar} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GridRapat;
