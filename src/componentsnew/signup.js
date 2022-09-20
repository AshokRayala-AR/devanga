import React, { useState } from "react";
import Success from "./success.js";
import Error from "../componentsnew/error";
import "./success.css";
import "./error.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  // let errorMsg;
  // let successMsg;
  const [userName, setUserName] = useState("");
  const UserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const [userEmail, setUserMail] = useState("");
  const UserEmailHandler = (e) => {
    setUserMail(e.target.value);
  };

  const [userPassword, setUserPassword] = useState("");
  const UserPasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const [errorModal, setErrorModal] = useState(false);
  const [success, setSuccess] = useState(false);

  function modalStateClearBtnHandler() {
    setErrorModal(false);
  }

  function modalStateInputHandler() {
    setErrorModal(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://dev.srinidhi.co/api/user/signUp", {
        userName,
        userEmail,
        userPassword
      })
      .then((response) => {
        // console.log(response.data.data["userName"]);
        // console.log(response.data.data["userEmail"]);
        // console.log(response.data.data["userPassword"]);
        // successMsg = response.data["msg"];
        setSuccess(true);
      })
      .catch((error) => {
        setErrorModal(true);

        // errorMsg = error.response.data["msg"];
        // console.log(error.response.data["msg"]);
      });
  };
  return (
    <div className="adminLogin container-lg d-flex flex-column justify-content-center align-items-center ">
      <form
        onSubmit={submitHandler}
        className="adminForm p-4 mt-1 border shadow-sm "
      >
        <h4 className="h4 overflow-hidden">Sign Up</h4>
        <div className="adminFormInput mb-2 mt-2">
          <input
            required
            style={{ height: "35px" }}
            className="adminInput border"
            type="text"
            placeholder="userName"
            onChange={UserNameHandler}
            onClick={modalStateInputHandler}
          ></input>
        </div>
        <div className="adminFormInput mb-2 mt-2">
          <input
            required
            style={{ height: "35px" }}
            className="adminInput border"
            type="email"
            placeholder="UserEmail"
            onChange={UserEmailHandler}
          ></input>
        </div>
        <div className="adminFormInput mb-4">
          <input
            required
            style={{ height: "35px" }}
            className="adminInput border"
            type="password"
            placeholder="Password"
            onChange={UserPasswordHandler}
          ></input>
        </div>
        <div className="adminFormButton mt-4 d-flex justify-content-around">
          <button
            className="btn btn-danger "
            type="reset"
            onClick={modalStateClearBtnHandler}
          >
            CLEAR
          </button>
          <button className="btn btn-primary" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <Error errorModal={errorModal}> Invalid Entries</Error>
      <Success success={success}>
        <p className="mb-3 overflow-hidden">Sign Up success</p>
        <Link to="/login"> Go back to login page</Link>
      </Success>
    </div>
  );
}
