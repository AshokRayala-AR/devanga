import React from "react";
import pinkreceipt from "../images/pinkreceipt.jpg";
import cardone from "../images/cardone.jpg";
import cardthree from "../images/cardthree.jpg";
import cardtwo from "../images/cardtwo.jpg";
import cardfour from "../images/cardfour.jpg";
import pricechart from "../images/pricechart.jpg";
import "./pinkreceipt.css";

function PinkReceipt() {
  return (
    <div
      className="container-lg text-center pink-receipt-card mt-5 p-5"
      id="pink-receipt-card"
    >
      <div className="col pink-recipt-box">
        <h1 className="h1 overflow-hidden mb-3 p-3">
          ದೇವಾಂಗ ಮಂಡಲಿ (ರಿ.) ಕಾರ್ಯಕ್ರಮಗಳು
        </h1>
        <img className="pink-img mb-4" src={pinkreceipt} alt="pink-receipt" />
      </div>
      <div className="col cards-box" id="card-holder">
        <img className="cardone-img mb-4" src={cardone} alt="card-one" />
        <img className="cardtwo-img mb-4" src={cardtwo} alt="card-two" />
        <img className="cardthree-img mb-4" src={cardthree} alt="card-three" />
        <img className="cardfour-img mb-5" src={cardfour} alt="card-four" />
      </div>
      <div className="col pricing-chart-box">
        <h1 className="h1 overflow-hidden mb-4">ದೇವಸ್ಥಾನದ ಸೇವೆಗಳು </h1>
        <h3 className="h3 overflow-hidden mb-3">ಸೇವಾ ವಿವರಗಳು</h3>
        <img src={pricechart} alt="pricechart-img" id="pricechart" />
      </div>
    </div>
  );
}

export default PinkReceipt;
