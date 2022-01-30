import React from 'react';
import './Navbar.css';
import AuthService from "../../utils/auth";

function Navbar () {
    const logout = (event) => {
            event.preventDefault();
            AuthService.logout();
    };

    return (
        <section className="navbar">
        <a href="/" className="navbar-item">Home</a>
        <a href="/about" className="navbar-item">About</a>
        <a href="/login" className="navbar-item">Login</a>
        <a href="/signup" className="navbar-item">Signup</a>
        <a href="https://buy.stripe.com/test_3cseYn4CM5bi4Uw5kl" target="_blank" rel="noreferrer" className="navbar-item" >Donate</a>
        <nav className='navbar'>
          {AuthService.loggedIn() ? (
            <>
              <a href="/profile" className="navbar-item">View Profile</a>
              <a href="/" className="navbar-item" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              {/* <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/profile">Profile</Link>
              <a href="https://buy.stripe.com/test_3cseYn4CM5bi4Uw5kl" target="_blank" rel="noreferrer">Donate</a> */}

            </>
          )}
        </nav>
    </section>
    )
}

export default Navbar;