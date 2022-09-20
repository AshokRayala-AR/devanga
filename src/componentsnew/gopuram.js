import React from "react";
import gopuram from "../images/gopuram.jpg";
import "./gopuram.css";

function Gopuram() {
  return (
    <div className="container-lg  mb-5">
      <div
        className="row gopuram-card justify-content-around flex-sm-row flex-column-reverse"
        id="gopuram-card"
      >
        <div className=" col-sm-5 col-md-5 gopuram-text-container text-left ">
          <h1 className="h1 overflow-hidden mt-2 ">ದೇವಾಂಗ ಮಂಡಲಿ (ರಿ.)</h1>
          <h3 className="h3 mt-3 mb-2 overflow-hidden">ಸಂಸ್ಥೆಯ ಉದ್ದೇಶಗಳು :-</h3>
          <br />
          <p className="p p1">
            1) ದೊಡ್ಡಬಳ್ಳಾಪುರ ತಾಲ್ಲೂಕಿನ ದೇವಾಂಗ ಮಹಾಜನರ ಆಧ್ಯಾತ್ಮಿಕ ನೈತಿಕ, ಆರ್ಥಿಕ,
            ಸಾಮಾಜಿಕ ಮತ್ತು ರಾಜಕೀಯ ಪುರೋಭಿವೃದ್ಧಿಗಾಗಿ ಅವಶ್ಯಕವಾದ ಎಲ್ಲಾ ಕಾರ್ಯಗಳನ್ನೂ
            ಕೈಗೊಳ್ಳುವುದು.
          </p>
          <br />
          <p className="p p2">
            2) ದೇವಾಂಗ ಮಹಾಜನರ ಏಳಿಗೆಗಾಗಿ ಜ್ಞಾನ ಪ್ರಸಾರಣೆ ಕಾರ್ಯವನ್ನು ಕೈಗೊಳ್ಳುವುದು,
            ತದಂಗವಾಗಿ ಸಂಸ್ಕೃತ ಮತ್ತು ವೇದ ಪಾಠಶಾಲೆ ಯನ್ನು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿನಿಲಯ
            (Hostel) ವನ್ನು ಏರ್ಪಡಿಸಿ ಅವಕ್ಕೆ ಬೇಕಾಗುವ ಹಣಸಹಾಯವನ್ನು ಒದಗಿಸುವುದು.
          </p>
          <br />
          <p className="p p3">
            {" "}
            3) ದೊಡ್ಡಬಳ್ಳಾಪುರದ ಟೌನ್ ನಲ್ಲಿರುವ ಶ್ರೀ ರಾಮಲಿಂಗ ಚಂದ್ರ ಚೌಡೇಶ್ವರಿ ಅಮ್ಮನವರ
            ದೇವಸ್ಥಾನದ ಎಲ್ಲಾ ವಿಧವಾದ ಪೂಜಾ ಕಾರ್ಯಗಳಿಗೂ ಮತ್ತು ದೇವಸ್ಥಾನದ ಸಿಬ್ಬಂದಿಯವರ
            ಸಂಬಳ ಸಾರಿಗೆಗಳಿಗೂ, ಹಣಸಹಾಯವನ್ನು ಒದಗಿಸುವುದು.
          </p>
          <br />
          <p className="p p4">
            4) <span className="content1">ಸಂಸ್ಥೆಯ ವ್ಯಾಪ್ತಿ</span>
            <span className="content-2">ದೊಡ್ಡಬಳ್ಳಾಪುರ ತಾಲ್ಲೂಕ್,</span>
          </p>
          <br />
          <p className="p p5">
            5) <span className="content1">ಸಂಸ್ಥೆಯ ಕಾರ್ಯಾಲಯ :</span>
            <span className="content2">
              ಈ ಸಂಸ್ಥೆಯ ಕಾರ್ಯಾಲಯವು ದೊಡ್ಡಬಳ್ಳಾಪುರದ ಟೌನ್ ನ ಚೌಡೇಶ್ವರಿ ಗುಡಿ
              ಬೀದಿಯಲ್ಲಿರುವ ಚೌಡೇಶ್ವರಿ ದೇವಸ್ಥಾನದ ಹೊರ ಆವರಣದ ಒಂದು ಕೊಠಡಿಯಲ್ಲಿ
              ಇರತಕ್ಕದ್ದು.
            </span>
          </p>
        </div>
        <div className="col-sm-5">
          <img className="gopuram-img " src={gopuram} alt="gopuram" />
        </div>
      </div>
    </div>
  );
}
export default Gopuram;
