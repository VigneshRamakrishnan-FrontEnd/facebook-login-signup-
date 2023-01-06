import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();

  function reDirect1() {
    navigate("/");
  }

  function reDirect2() {
    navigate("/signup");
  }

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
    if (email === "rv3673@gmail.com" && password === "A@1$asdf") {
      alert("login sucess");
    } else if (email != "rv3673@gmail.com" && password === "A@1$asdf") {
      alert("check email");
    } else if (email === "rv3673@gmail.com" && password != "A@1$asdf") {
      alert("check password");
    } else {
      alert("Check Your Email and Password");
    }
  };

  return (
    <div className="container text-center  pt-5">
      <h1 className="text-primary " onClick={reDirect1}>
        Facebook
      </h1>
      <div className="pt-3 ">
        <div className="pt-3 col-xl-6 col-lg-8 col-md-8 col-10 mx-auto  border border-2  rounded  ">
          <h3 className="pt-2">Login in to Facebook</h3>
          <div className="pt-5">
            <input
              className=" col-xl-8 col-lg-8 col-md-8 col-10 rounded p-2"
              placeholder="Enter the Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr ? (
              <p className="text-danger">Your email is empty </p>
            ) : (
              ""
            )}
          </div>
          <div className="pt-3">
            <input
              className=" col-xl-8 col-lg-8 col-md-8 col-10 rounded p-2"
              placeholder="Enter the Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {pwdError ? (
            <p className="text-danger">Your password is empty</p>
          ) : (
            ""
          )}
          <div className="pt-3">
            <button
              className="border-0 rounded bg-primary p-2 text-light p-2  col-xl-8 col-lg-8 col-md-8 col-10"
              onClick={validate}
            >
              Login
            </button>{" "}
            <div className="pb-5 pt-2">
              <a href="#" className="text-primary ">
                Forgotten Account ?{" "}
              </a>
              <span>
                <button
                  className="border-0 text-primary   "
                  onClick={reDirect2}
                >
                  Signup
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
