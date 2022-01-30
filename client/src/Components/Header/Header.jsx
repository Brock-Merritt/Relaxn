import React from 'react';
import Navbar from '../navbar/Navbar';

import './Header.css';

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
          mental help number here
        </section>
        <section className="header-bottom__email">
          link to disclaimer here
        </section>
      </section>
    </section>
  )
}

export default Header;