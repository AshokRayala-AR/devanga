import axios from "axios";
import React, { useState } from "react";
import "./registration.css";

export default function RegisterForm() {
  const [inputName, setInputName] = useState("");
  const nameInputHandler = (e) => {
    setInputName(e.target.value);
  };

  const [inputEmail, setInputEmail] = useState("");
  const mailInputHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const [inputTel, setInputTel] = useState("");
  const telInputHandler = (e) => {
    setInputTel(e.target.value);
  };

  const [vilasaInput, setVilasaInput] = useState("");
  const vilasaInputHandler = (e) => {
    setVilasaInput(e.target.value);
  };

  const [vishayaInput, setVishayaInput] = useState("");
  const vishayaInputHandler = (e) => {
    setVishayaInput(e.target.value);
  };

  const [sandesaInput, setSandesaInput] = useState("");
  const sandesaInputHandler = (e) => {
    setSandesaInput(e.target.value);
  };

  const contactSubmitHandler = (e) => {
     e.preventDefault();

    axios.post("https://dev.srinidhi.co/api/user/contactUs", {
      inputName,
      inputEmail,
      inputTel,
      vilasaInput,
      vishayaInput,
      sandesaInput,
    });
  };
  return (
    <div className="register-form container-lg p-5">
      <div className="contact-us-text">
        <h2 className="h2 overflow-hidden">ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</h2>
        <p>ಚೌಡೇಶ್ವರಿ ದೇವಸ್ಥಾನ ರಸ್ತೆ, ದೊಡ್ಡಬಳ್ಳಾಪುರ</p>
        <p>devangamandalidbpur1968@gmail.com</p>
        <p>+91 8867704848</p>
      </div>
      <form
        className="user-registration-inputs"
        onSubmit={contactSubmitHandler}
      >
        <div className="input1">
          <input 
            type="text"
            placeholder="ಹೆಸರು"
            onChange={nameInputHandler}
          ></input>
          <input
            type="text"
            placeholder="ಇಮೇಲ್ ಐಡಿ"
            onChange={mailInputHandler}
          ></input>
        </div>
        <div className="input2">
          <input
            type="tel"
            placeholder="ದೂರವಾಣಿ ಸಂಖ್ಯೆ"
            onChange={telInputHandler}
          ></input>
          <input
            type="text"
            placeholder="ವಿಳಾಸ"
            onChange={vilasaInputHandler}
          ></input>
        </div>
        <div className="input3">
          <input
            type="text"
            placeholder="ವಿಷಯ"
            onChange={vishayaInputHandler}
          ></input>
        </div>
        <div className="input4 pb-4">
          <textarea
            placeholder="ಸಂದೇಶ"
            rows="5"
            cols="40"
            onChange={sandesaInputHandler}
          ></textarea>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
