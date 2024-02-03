// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import '../component/DetailPenawaran/detailpenawaran.css';
import { Container, Row, Col, Form } from 'reactstrap';
import Reservasi from '../component/Reservasi/Reservasi';
import img1 from '../../src/assets/img/chinese.png';
import { useParams } from 'react-router-dom';

const DetailPewaran = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');

  // Dummy data for reservasi (replace this with your data fetching logic)
  const reservasi = {
    id,
    photo: img1,
    title: 'EARLY BIRD Chinese New Year Dinner',
    address: 'Bandung',
    desc: '',
    price: 100, // Replace with actual price
    reviews: [], // Replace with actual reviews array
    city: 'Bandung',
    distance: 5, // Replace with actual distance
    maxGroupSize: 10, // Replace with actual max group size
  };

  const { title, address, desc, price, city, distance, maxGroupSize } = reservasi;

  // Dummy calculation for average rating (replace this with your actual logic)
  const avgRating = 4.5;

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="penawaran__content">
              <img src={img1} alt="" style={{ width: '50%' }} />
              <div className="penawaran__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="penawaran__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}>
                      {avgRating}
                    </i>
                  </span>
                  <span>
                    <i className="ri-map-pin-user-fill"></i>
                    {address}
                  </span>
                </div>
                <div className="penawaran__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i>
                    {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i>${price} /per person
                  </span>

                  <span>
                    <i className="ri-group-line"></i>
                    {maxGroupSize} People
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
                <p>Routing Lorem ipsum dolor sit amet.</p>
                <a href="#reservasi" className="primary__btn" style={{ textDecoration: 'none', color: 'white' }}>
                  Reservasi
                </a>
              </div>

              {/* ========= penawaran review section start ======== */}
              <div className="penawaran__reviews mt-4">
                <h4>Reviews</h4>
                <Form>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    {/* Dummy stars for visual representation */}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {star} <i className="ri-star-s-fill"></i>
                      </span>
                    ))}
                  </div>

                  <div className="review__input">
                    <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" />
                    <button type="submit" className="btn primary__btn text-white">
                      Send
                    </button>
                  </div>
                </Form>
              </div>
            </div>
            {/* ======== price list ======== */}
          </Col>
          <Col lg="4">
            <Reservasi reservasi={reservasi} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetailPewaran;
