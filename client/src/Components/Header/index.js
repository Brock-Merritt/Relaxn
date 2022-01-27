import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header class="main-header">
      <div>
        <Link to="/">
          <h1>Relaxn</h1>
        </Link>

        <nav className="main-nav">
          {Auth.loggedIn() ? (
            <>
              <Link to="/home">Home</Link>
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
