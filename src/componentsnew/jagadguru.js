import React from "react";
import guru from "../images/Jagadguru.jpg";
import "./jagadguru.css";

function Jagadguru() {
  return (
    <div className="container-lg mt-5 mb-5">
      <div
        className="row guru-card justify-content-around flex-column-reverse  flex-sm-row "
        id="guru-card"
      >
        <div className=" col-sm-5 col-md-5 guru-text-container d-flex justify-content-center align-items-center">
          <h1 className="h1 overflow-hidden text-center guru-text">
            ದೇವಾಂಗ ಜಗದ್ಗುರು ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ದಯಾನಂದಪುರಿ ಮಹಾಸ್ವಾಮೀಜಿ
          </h1>
        </div>
        <div className=" col-sm-5">
          <img className="guru-img" src={guru} alt="guruji" />
        </div>
      </div>
    </div>
  );
}
export default Jagadguru;
