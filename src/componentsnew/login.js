import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../componentsnew/error.js";
// import Wrapper from "../componentsnew/wrapper";
import axios from "axios";

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function AdminLogin(props) {
  // let adminUserEmail;
  // let adminPassword;
  const navigate = useNavigate();
  const [errorModal, setErrorModal] = useState(false);
  // const [data, setData] = useState([]);

  const [userEmail, setUserMail] = useState("");
  const UserEmailHandler = (e) => {
    setUserMail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };

  function modalStateClearBtnHandler() {
    setErrorModal(false);
  }

  function modalStateInputHandler() {
    setErrorModal(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();


    axios
      .post("https://dev.srinidhi.co/api/user/login", { userEmail, password })
      .then((response) => {

        
        props.setIsLoggedIn(true);

        console.log('ash0k')

      })
      .catch((error) => {
        console.log('asdfg')
        setErrorModal(true);
      });
  };

  return (
    <div className="adminLogin container-lg d-flex flex-column justify-content-center align-items-center ">
      <form
        onSubmit={submitHandler}
        className="adminForm p-4 mt-1 border shadow-sm "
      >
        <p>
          <i>if you already have an account</i>
        </p>
        <h4 className="h4 overflow-hidden">Login</h4>

        <div className="adminFormInput mb-2 mt-2">
          <input
            required
            style={{ height: "35px" }}
            className="adminInput border"
            type="email"
            placeholder="UserEmail"
            onChange={UserEmailHandler}
            onClick={modalStateInputHandler}
          ></input>
        </div>
        <div className="adminFormInput mb-4">
          <input
            required
            style={{ height: "35px" }}
            className="adminInput border"
            type="password"
            placeholder="Password"
            onChange={passwordHandler}
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
        <div>
          <p className="mt-5">If you don't have any account sign up here</p>
          <Link to="/signUp">
            <button className="btn btn-success"> Sign Up </button>
          </Link>
        </div>
      </form>

      <Error errorModal={errorModal}>Invalid Entries</Error>
    </div>
  );
}
