// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../component/DetailPenawaran/detailpenawaran.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import img1 from '../../src/assets/img/chinese.png';
const DetailPewaran = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="penawaran__content">
              <img src={img1} alt="" style={{ width: '50%' }} />
              <div className="penawaran__info">
                <h2>EARLY BIRD Chinese New Year Dinner</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="penawaran__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}>
                      12
                    </i>
                  </span>
                  <span>
                    <i className="ri-map-pin-user-fill">12</i>
                  </span>
                </div>
                <div className="penawaran__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line">hello world</i>
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line"></i>testin123
                  </span>
                  <span>
                    <i className="ri-group-line"></i>People
                  </span>
                </div>
                <h5>Description</h5>
                <p>Routing Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetailPewaran;
