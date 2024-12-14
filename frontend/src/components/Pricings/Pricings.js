import React from "react";
import "./Pricings.css";
import pricingimage from '../../images/pricing.png';



function Pricings() {
  return (
    <div className="pricing-section">
      <h1 className="pricing-head">Pricings</h1>

      <img src={pricingimage} className="pricing-image" alt="pricing"/>
    </div>
  );
}

export default Pricings;
