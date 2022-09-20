import React from "react";
import img1 from "../images/facilitiesone.jpg";
import img2 from "../images/facilitiestwo.jpg";
import img5 from "../images/facilitiesfive.jpg";
import "./facilities.css";

function Facilities(props) {
  return (
    <div className="p-5">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="facilities-1" />
        <div className="card-body">
          <h3 className="overfolw-hidden card-title mt-1 p-1">
            {" "}
            {props.content}
          </h3>
          <a
            href="#"
            className="btn btn-primary  mt-5 text-center  d-flex justify-content-center"
          >
            ಹೆಚ್ಚಿನ ಮಾಹಿತಿ
          </a>
        </div>
      </div>
    </div>
  );
}
export default function FacilitiesRender() {
  return (
    <div className="container-lg facilities-card mt-5" id="facilities-card">
      <div className="row row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
        <Facilities image={img1} content="ದೇವಾಂಗ ಮಂಡಲಿ ಕಲ್ಯಾಣ ಮಂದಿರ" />
        <Facilities image={img2} content="ದೇವಾಂಗ ಸಂಕೀರ್ಣ" />
        <Facilities image={img1} content="ದೇವಲ ಮಹರ್ಷಿ ವಿದ್ಯಾನಿಕೇತನ" />
        <Facilities image={img2} content="ದೇವಾಂಗ ವಾಣಿಜ್ಯ ಮಳಿಗೆ" />
        <Facilities image={img5} content="ಮುಕ್ತಿ ಧಾಮ" />
      </div>
    </div>
  );
}
