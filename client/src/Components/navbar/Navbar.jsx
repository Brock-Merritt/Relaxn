import React from "react";
import "./Navbar.css";
import Auth from "../../utils/auth";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <section className="navbar">
      <a href="/" className="navbar-item">
        Home
      </a>
      <a href="/About.html" className="navbar-item">
        About
      </a>

      {Auth.loggedIn() ? (
        <>
          <a href="/login" onClick={logout} className="navbar-item">
            Logout
          </a>
        </>
      ) : (
        <>
          <a href="/login" className="navbar-item">
            Login
          </a>
          <a href="/signup" className="navbar-item">
            Signup
          </a>
        </>
      )}

      <a
        href="https://buy.stripe.com/test_3cseYn4CM5bi4Uw5kl"
        target="_blank"
        rel="noreferrer"
        className="navbar-item"
      >
        Donate
      </a>
      <nav className="navbar"></nav>
    </section>
  );
}

export default Navbar;
