// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../component/DetailPenawaran/detailpenawaran.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import img1 from '../../src/assets/img/chinese.png';
const DetailPewaran = () => {
  // submit request to the server
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    // later will call our API and load our data from database
  };
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
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
                    <i className="ri-map-pin-user-fill"> 12</i>
                  </span>
                </div>
                <div className="penawaran__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i> Bandung
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line"></i> testin123
                  </span>
                  <span>
                    <i className="ri-group-line"></i> People
                  </span>
                </div>
                <h5>Description</h5>
                <p>Routing Lorem ipsum dolor sit amet.</p>
                <a href="#" className="primary__btn" style={{ textDecoration: 'none', color: 'white' }}>
                  Reservasi
                </a>
              </div>

              {/* ========= penawaran review section start ======== */}
              <div className="penawaran__reviews mt-4">
                <h4>Reviews</h4>
                <Form onSubmit={{ submitHandler }}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span>
                      1 <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      2 <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      3 <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      4 <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      5 <i className="ri-star-s-fill"></i>
                    </span>
                  </div>

                  <div className="review__input">
                    <input type="text" name="" id="" placeholder="share your thoughts" />
                    <button type="submit" className="btn primary__btn text-white">
                      Send
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetailPewaran;
