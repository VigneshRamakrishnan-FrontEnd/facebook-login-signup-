import React from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  function reDirect1() {
    navigate("/login");
  }
  function reDirect2() {
    navigate("/signup");
  }

  return (
    <div className="container-fluid text-center pt-5">
      <h1 className="text-primary">Welcome To Facebook</h1>
      <div className="pt-5">
        <p>If you have a account</p>
        <button
          className="border-0 rounded bg-primary text-light p-2 w-25"
          onClick={reDirect1}
        >
          Login
        </button>
      </div>
      <div className="pt-5 ">
        {" "}
        <p> If you dont have a account get register?</p>
        <p>Lets starts a journey with us...</p>
        <button
          className="border-0 rounded bg-success text-light p-2 w-25"
          onClick={reDirect2}
        >
          Signup
        </button>
      </div>
    </div>
  );
};
