import React from "react";
import "./Hero.css";

function Hero() {
  return (

    <div className="hero-section">


      {/* CONTENT */}
      <div className="left-container">
        <h1 className="left-heading">Introducing PrashnaAI✨</h1>
        <h2 className="left-sub-heading">
          Transform PDFs & URLs into Questions Instantly!
        </h2>
        <p className="left-para">
          Unlock the potential of your documents and <br></br> web links by turning them
          into multiple-choice,<br></br> true/false, or fill-in-the-blank questions.<br></br>
          Perfect for educators, professionals, and lifelong learners
        </p>

        <button className="start-btn">Start for Free</button>
        
      </div>





      {/* IMAGE */}
      <div className="right-container">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQVtX-lB9sxt8WXnagcA94Uo9ksx1drC-_g&s' className="right-img" alt="man-img"/>
      </div>



    </div>



    
  );
}

export default Hero;
