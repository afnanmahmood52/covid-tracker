import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "./Navbar.css"
import CallIcon from '@material-ui/icons/Call';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import {NavLink} from 'react-router-dom';



export default function Navbar() {

  return (
    <div className="main-div">
      <div className="dial-headline">
        <div className="for-Animation" data-aos="zoom-out" data-aos-duration="850">
          <CallIcon style={{ color: 'white' }}/>
          <h1 className="headline"> Dial 0000 health helpline</h1>
        </div> 
      </div>
      
      
      <div className="container-fluid nav_bg" id="nav">
        <div className="row">
        
          <div className="col-12 mx-auto">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
          <BarChartOutlinedIcon style={{color:'white', fontSize: 40}}/>
          
          <NavLink className="navbar-brand" to="/">
            CoronaTracker
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto nav-custom-links main-links">
              <li className="nav-item nl">
                <NavLink exact className="nav-link" to="/" activeClassName="active-nav" id="n-item" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item nl">
                <NavLink className="nav-link" to="/about" activeClassName="active-nav" id="n-item" >
                  COVID-19
                </NavLink>
              </li>

              <li className="nav-item nl">
                <NavLink className="nav-link" to="/prevention" activeClassName="active-nav" id="n-item">
                  Prevention
                </NavLink>
              </li>

              <li className="nav-item nl">
                <NavLink className="nav-link" to="/FAQ" activeClassName="active-nav" id="n-item" >
                  FAQ
                </NavLink>
              </li>

              <li className="nav-item nl">
                <NavLink className="nav-link" to="/contact" activeClassName="active-nav" id="n-item">
                  Contact
                </NavLink>
              </li>
              
            </ul>
          </div>
        </nav>

          </div>
          </div>
        </div>
      
    
  
    </div>
  );
}
