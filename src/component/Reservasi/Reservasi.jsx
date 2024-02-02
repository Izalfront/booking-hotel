// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './reservasi.css';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';

const Reservasi = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: '01',
    userMail: 'test@example.com',
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  const handleClick = (e) => {
    e.preventDefault();
    // Add logic here to handle the booking
    // For example, you can send a request to your server to process the booking
    // After the booking is processed successfully, you can navigate to a success page or show a confirmation message
    navigate('/success'); // Replace '/success' with the actual success page route
  };

  return (
    <div className="reservasi">
      <div className="reservasi__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="penawaran__rating d-flex align-items-center">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      <div className="reservasi__form">
        <h5>Information</h5>
        <Form className="reservasi__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" id="reservasiAt" required onChange={handleChange} />
            <input type="number" id="guestSize" placeholder="Guest" required onChange={handleChange} />
          </FormGroup>
        </Form>
      </div>
      {/* ======= reservasi bottom ======= */}
      <div className="reservasi__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              {price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Reservasi;
