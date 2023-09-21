import './Navbar.css'
import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Main from '../../pages/Main/Main';
import Contacts from '../../pages/Contacts/Contacts';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
      <nav>
      <Link to="/" className="title">
      <img id='logo' src='tht-logo.png'></img>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Stories">Stories</NavLink>
        </li>
        <li>
          <NavLink to="/Contacts">About Us</NavLink>
        </li>
      </ul>
    </nav>

    )
}