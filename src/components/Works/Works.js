import React from "react";
import "./Works.css";

function Works() {
  return (
    <div className="works-section">
      <h1 className="works-heading">How It Works✨</h1>

      <div className="works-container">
        <div className="works-box select">
          <h1 className="box-heading">Upload your file or paste a URL.</h1>
          <p className="box-para">
            Simply drag and drop your PDF, paste a URL, or type in text. Our
            system quickly analyzes the content, ensuring precision and accuracy
            for question generation.
          </p>
        </div>

        <div className="works-box">
          <h1 className="box-heading">Upload your file or paste a URL.</h1>
          <p className="box-para">
            Simply drag and drop your PDF, paste a URL, or type in text. Our
            system quickly analyzes the content, ensuring precision and accuracy
            for question generation.
          </p>
        </div>

        <div className="works-box">
          <h1 className="box-heading">Upload your file or paste a URL.</h1>
          <p className="box-para">
            Simply drag and drop your PDF, paste a URL, or type in text. Our
            system quickly analyzes the content, ensuring precision and accuracy
            for question generation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
