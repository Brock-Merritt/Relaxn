import React from 'react';
import './Navbar.css'

function Navbar () {

    return (
        <section className="navbar">
        <a href="/" className="navbar-item">Home</a>
        <a href="/about" className="navbar-item">About</a>
        <a href="/login" className="navbar-item">Login</a>
        <a href="/signup" className="navbar-item">Signup</a>
        <a href="/contact" className="navbar-item">Contact</a>
        <a href="/" className="navbar-item">Logout (if signed in)</a>
    </section>
    )
}

export default Navbar;