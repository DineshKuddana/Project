import Link from "next/link";
import React from "react";

function Hero() {
  return (

    <div className="hero-section flex justify-between px-16 mt-32 py-8 flex-wrap">


      {/* CONTENT */}
      <div className="left-container">
        <h1 className="left-heading text-4xl font-semibold">Introducing PrashnaAI✨</h1>
        <h2 className="left-sub-heading text-2xl mt-2">
          Transform PDFs & URLs into Questions Instantly!
        </h2>
        <p className="left-para text-lg mt-4">
          Unlock the potential of your documents and <br></br> web links by turning them
          into multiple-choice,<br></br> true/false, or fill-in-the-blank questions.<br></br>
          Perfect for educators, professionals, and lifelong learners
        </p>

        <Link href="/dashboard"><button className="start-btn px-4 py-2 mt-4 rounded bg-blue-500 text-white">Start for free</button></Link>
        
      </div>





      {/* IMAGE */}
      <div className="right-container">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQVtX-lB9sxt8WXnagcA94Uo9ksx1drC-_g&s' className="right-img h-64 rounded" alt="man-img"/>
      </div>



    </div>



    
  );
}

export default Hero;
