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

        <nav className="text-center">
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
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
