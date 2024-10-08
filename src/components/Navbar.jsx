import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import logo from '../assets/logo.svg';
import "./Navbar.css";

// OPTIONAL: USE EFFECT VERSION
// function Navbar({setKeyword}) {
function Navbar({setLocations}) {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 py-2 px-4" id="navbar">
      <div className="d-flex align-items-center">
        <img height="56" className="me-3" src={logo} alt="anime pilgrimage logo" />
      </div>
      <div className="d-flex align-items-center gap-5">
        {/* // OPTIONAL: USE EFFECT VERSION */}
        {/* <Searchbar setKeyword={setKeyword} /> */}
        <Searchbar setLocations={setLocations} />
        <div className="dropdown">
          <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="https://anime-locations-api.onrender.com/api/v1/locations" target="_blank" >Show API</a></li>
            <li><a className="dropdown-item" href="https://mauoser.github.io/" target="_blank" >Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
