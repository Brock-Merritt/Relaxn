import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };
  return (
    <header className="main-header">
      <div>
        <Link to="/">
          <h1 className="title">Relaxn</h1>
        </Link>

        <nav>
          {AuthService.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/profile">Profile</Link>
              <a href="https://buy.stripe.com/test_3cseYn4CM5bi4Uw5kl" target="_blank">Donate</a>

            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
