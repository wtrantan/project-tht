import './Navbar.css'
import { Routes, Route, Link } from "react-router-dom";
import Main from '../../pages/Main/Main';
import Contacts from '../../pages/Contacts/Contacts';
export default function Navbar() {
    function toggleMobileMenu(menu) {
        menu.classList.toggle('open');
    }
    return (
    <div>
  <header>

<div className="tw-text-center "><a id='brand' className="" href="/"><img src='tht-logo.png'></img></a></div>

</header>

<nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="Stories">Stories</Link></li>
    <li><Link to="Contacts">About Us</Link></li>
    
  </ul>
</nav>

<div id="hamburger-icon" onClick={() => toggleMobileMenu(this)}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
  <ul className="mobile-menu">
    <li><a href="/home">Home</a></li>
    <li><a href="/stories">Stories</a></li>
    <li><a href="/about">About Us</a></li>
  </ul>
</div>

</div>

    )
}