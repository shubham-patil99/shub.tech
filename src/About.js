import React from "react";
import Navbar from "./Navbar";
import digital from "../src/images/digital.jpeg";

const About = () => {
  return(
    <>
    <div className="front" style={{
              background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${digital})`,
              height: "42rem",
              width: "100%",

            }}>
      <Navbar/>
      <div className="content-1">
      <h1 >Websites done right.</h1>
      <p className="para2">I am a web developer from Karnataka, India and currently living in Belgaum,
       I enjoy building everyting from small business sites to rich interactive web apps. 
       If you are a business seeking a web presence or an employer looking to hire,
       you can get in touch with me here.</p>
       <button type="button" className="btn btn-danger mx-3 w-5 my-5">I need a website </button>   
		<button type="button" className="btn btn-secondary">I'm looking to hire</button>
       </div>
       </div>
    </>
    );
};

export default About;
	