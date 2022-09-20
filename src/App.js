import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentsnew/login";
import Banner from "./componentsnew/banner.js";
import Navbar from "./componentsnew/navbar.js";
import Jagadguru from "./componentsnew/jagadguru.js";
import Gopuram from "./componentsnew/gopuram";
import Crew from "./componentsnew/crew";
import Text from "./componentsnew/text";
import PinkReceipt from "./componentsnew/pinkreceipt";
import Facilities from "./componentsnew/facilities";
import RegisterForm from "./componentsnew/registration";
import Signup from "./componentsnew/signup";
import Wrapper from "./componentsnew/wrapper";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <Navbar setIsLoggedIn={setIsLoggedIn} />
                <Banner />
                <Jagadguru />
                <Gopuram />
                <Text />
                <Crew />
                <PinkReceipt />
                <Facilities />
                <RegisterForm />
              </>
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path='/home' element={<Wrapper />}></Route> */}
        <Route path='/mukhyaputi' element={<Banner />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
