import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import Button from './Button';
import logo from "../assets/th.jpeg";


function Navbar() {
  return (
    <div className="navbar">

        <div className="logo">
            <h1>Booking App</h1>
        </div>

        <div className="links-container">
          <div className="nav-links">
              <Link to="/login"><Button text='LogIn' /></Link>
          </div>
          {/* <div className="nav-links">
              <Link to="/signup"><Button text='SignUp' /></Link>
          </div> */}
        </div>

    </div>
  )
}

export default Navbar