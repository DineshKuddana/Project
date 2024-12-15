import React from "react";
import "./Features.css";
import abc from "../../images/abc.jpeg";

function Features() {
  return (
    <div className="features-section">
      <div className="typo-head">What the App Can Do:</div>

      <div className="features-container">
        {/* Feature 1 */}
        <div className="feature">
          <div className="left">
            <img src={abc} alt="feature-image" className="featureim" />
          </div>
          <div className="right">
            <h1 className="right-heading">
              <span className="extract">Extract Questions</span><br></br> from PDFs, URLs, or<br></br> Text
            </h1>
            <p className="right-para">
              Turn any document, webpage, or text input <br></br>into a set of
              well-structured questions.<br></br> Whether it's for educational,
              professional, or <br></br>personal use, our tool ensures efficiency and
              accuracy.<br></br>
            </p>
          </div>
        </div>





        <div className="feature">
          <div className="left">
            <img src={abc} alt="feature-image" className="featureim" />
          </div>
          <div className="right">
            <h1 className="right-heading">
              <span className="extract">Extract Questions</span><br></br> from PDFs, URLs, or<br></br> Text
            </h1>
            <p className="right-para">
              Turn any document, webpage, or text input <br></br>into a set of
              well-structured questions.<br></br> Whether it's for educational,
              professional, or <br></br>personal use, our tool ensures efficiency and
              accuracy.<br></br>
            </p>
          </div>
        </div>





        <div className="feature">
          <div className="left">
            <img src={abc} alt="feature-image" className="featureim" />
          </div>
          <div className="right">
            <h1 className="right-heading">
              <span className="extract">Extract Questions</span><br></br> from PDFs, URLs, or<br></br> Text
            </h1>
            <p className="right-para">
              Turn any document, webpage, or text input <br></br>into a set of
              well-structured questions.<br></br> Whether it's for educational,
              professional, or <br></br>personal use, our tool ensures efficiency and
              accuracy.<br></br>
            </p>
          </div>
        </div>

        

       



      </div>
    </div>
  );
}

export default Features;
