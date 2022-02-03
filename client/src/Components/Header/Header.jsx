import React from 'react';
import Navbar from '../navbar/Navbar';
import Modal from '../../Components/Modal/Modal'


import './Header.css';
import ModalSecondary from '../Modal/Modal-secondary';

function Header () {

    return (
        <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">Relaxn</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          {/* 1-800-950-NAMI (6264) */}
          <ModalSecondary />
        </section>
        <section className="header-bottom__email">
          {/* <a href='../disclaimer.html' target="_blank" rel="noreferrer">Disclaimer</a> */}
          <Modal />
        </section>
      </section>
    </section>
  )
}

export default Header;