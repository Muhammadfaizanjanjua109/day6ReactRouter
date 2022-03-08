import React from 'react'
import {Link } from "react-router-dom";
import './Home.css';

function Navbar() {
  return (
    <div className='row'>
    <div className='container-fluid'>
    <nav style={{background:'transparent'}} className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">Faizan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{marginLeft:'10rem'}} className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link style={{marginLeft:'6rem'}} className="nav-link ml-3 pl-4" to="/about">About Me</Link>
            </li>
    
            <li className="nav-item">
              <Link style={{border: '1px solid',backgroundColor:'#ff4141',color:'white',marginLeft:'41rem',borderRadius:'24px'}} className="nav-link ml-3 pl-4" to="/about">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    </div>
    </div>
  )
}

export default Navbar