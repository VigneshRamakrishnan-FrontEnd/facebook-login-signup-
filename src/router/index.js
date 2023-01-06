import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { Signup } from "../components/signup";

export const Routing = () => {
  return (
    <div>
      {/* <div className="d-flex align-items-center justify-content-evenly">
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="signup"> Signup </Link>
      </div> */}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};
