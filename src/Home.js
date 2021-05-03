import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./Navbar"; 
import { NavLink } from "react-router-dom";
import shubtech from "./images/shubtech.jpg";

const Home = () => {
  return(
    <>
    	<div className="front" style={{
              background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${shubtech})`,
              height: "42rem",
              width: "100%",

            }}>
            < Navbar />
	     <div className="head-top">
	      <h5 className="phone"><FontAwesomeIcon icon={faPhoneAlt} /> | +91-9964123592</h5>
	      <h5 className="email"><FontAwesomeIcon icon={faEnvelope} /> | shubham.patil9964123@gmail.com</h5>
	      </div>		
	      <div className="adv">
	       <h1 className="adv-1">Creator Of Static | Dynamic Websites</h1>
	       <h3>The goal isn’t to build a website. The goal is to build your business.</h3>
	       <NavLink to="/service"><button className="button-1">Get Started</button></NavLink>
	       </div> 
	     </div>
    </>
    );
};

export default Home;
