// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';
import './header.css';
import { Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../../src/assets/img/logo.png';

const nav__links = [
  {
    path: '/home',
    display: 'Beranda',
  },
  {
    path: '/akomodasi',
    display: 'Akomodasi',
  },
  {
    path: '/penawaranspesial',
    display: 'Penawaran Spesial',
  },
  {
    path: '/rapatacara',
    display: 'Rapat dan Acara',
  },
];

function Header() {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ========= logo start ========== */}
            {/* <div className="logo">
              <img src={Logo} alt="" />
            </div> */}
            {/* ========= logo end ========== */}
            {/* ========= menu start ========= */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink activeClassName="active__link" to={item.path}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ========= menu end ========= */}
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
