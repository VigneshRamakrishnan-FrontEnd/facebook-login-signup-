import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Signup = () => {
  const navigate = useNavigate();

  function reDirect1() {
    navigate("/");
  }

  function reDirect2() {
    navigate("/login");
  }

  const [userDetails, setUserDetails] = useState({
    Fname: "",
    Lname: "",
    Gender: "",
    dob: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  console.log(userDetails, "got");

  const Validation = (userDetails) => {
    let errors = {};

    if (userDetails.Fname === "") {
      errors.Fname = "Please Enter your Fname";
    } else {
      errors.Fname = "";
    }
    if (userDetails.Lname === "") {
      errors.Lname = "Please Enter your Lname";
    } else {
      errors.Lname = "";
    }
    if (userDetails.Gender === "") {
      errors.Gender = "Gender is Required";
    } else {
      errors.Gender = "";
    }
    if (userDetails.dob === "") {
      errors.dob = "Birth date cannot be empty";
    } else {
      errors.dob = "";
    }
    const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
    if (userDetails.password1 === "") {
      errors.password1 = "password is Required";
    } else if (!validPassword.test(userDetails.password1)) {
      errors.password1 = "Enter the valid password format!";
    } else if (userDetails.password1.length < 8) {
      errors.password1 = "Password must be more than 8 characters";
    } else if (userDetails.password1.length > 12) {
      errors.password1 = "Password cannot exceed more than 12 characters";
    } else {
      errors.password1 = "";
    }
    if (!userDetails.password2) {
      errors.password2 = " Confirm Password is required*";
    } else if (userDetails.password2.length < 6) {
      errors.password2 = " Confirm Password must be more than 6 characters";
    } else if (userDetails.password2.length > 12) {
      errors.password2 =
        "Conform Password cannot exceed more than 12 characters";
    }
    //password mismatch
    else if (userDetails.password1 !== userDetails.password2) {
      errors.password2 = "passwords are not matched";
    } else if (userDetails.password1 === userDetails.password2) {
      errors.password2 = "passwords are  matched";
    } else {
      errors.password2 = "";
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (userDetails.email === "") {
      errors.email = "Email is required";
    } else if (!regex.test(userDetails.email)) {
      errors.email = "Enter the valid email format!";
    } else {
      errors.email = "";
    }

    console.log(errors);

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(userDetails));
  };

  return (
    <div className="container text-center pt-3 pt-xl-5 pt-lg-3 pt-md-3 h-100 ">
      <h1 className="text-primary " onClick={reDirect1}>
        Facebook
      </h1>
      <div className="pt-3">
        <div className="pt-3  border border-2  rounded col-xl-6 col-lg-8 col-md-8 col-12 mx-auto ">
          <h3 className="pt-2">Create a new Facebook account</h3>
          <div className="pt-5 d-flex align-items-center justify-content-center gap-1 ">
            <input
              className=" col-xl-4 col-lg-4 col-md-4 col-5   rounded p-2"
              placeholder="First Name "
              type="text"
              name="Fname"
              value={userDetails.Fname}
              onChange={onChange}
            />

            <input
              className=" col-xl-4 col-lg-4 col-md-4 col-5   rounded p-2"
              placeholder="Last Name "
              type="text"
              name="Lname"
              value={userDetails.Lname}
              onChange={onChange}
            />
          </div>
          <p class="text-danger">{errors.Fname}</p>
          <p class="text-danger">{errors.Lname}</p>
          <div className="pt-3">
            <input
              className=" col-xl-8 col-lg-8 col-md-8 col-10  rounded p-2"
              placeholder="Email Address"
              type="email"
              name="email"
              value={userDetails.email}
              onChange={onChange}
            />
            <p class="text-danger">{errors.email}</p>
          </div>
          <div className="pt-3">
            <input
              className="col-xl-8 col-lg-8 col-md-8 col-10  rounded p-2"
              placeholder="Confirm Password"
              type="password"
              name="password1"
              value={userDetails.password1}
              onChange={onChange}
            />
            <p className="text-danger">{errors.password1}</p>
          </div>
          <div className="pt-3">
            <input
              className="col-xl-8 col-lg-8 col-md-8 col-10  rounded p-2"
              placeholder="Re-enter Password"
              type="password"
              name="password2"
              value={userDetails.password2}
              onChange={onChange}
            />
            <p class="text-danger">{errors.password2}</p>
          </div>
          <div className="pt-3">
            <input
              className="col-xl-8 col-lg-8 col-md-8 col-10  rounded p-2"
              type="date"
              name="dob"
              value={userDetails.dob}
              onChange={onChange}
            />
            <p class="text-danger">{errors.dob}</p>
          </div>
          <div className="d-xl-flex d-lg-flex d-md-flex d-block mx-auto  align-items-center justify-content-center col-xl-8 col-lg-8 col-md-8 col-12 gap-xl-2 gap-lg-2 gap-md-4 gap-3 pt-3  ">
            <label>Gender </label>
            <div className="border p-2  rounded border-dark col-10 col-xl-5 col-lg-5 col-md-4 mx-auto   mt-2 mt-xl-0 mt-lg-0 mt-md-0  d-flex  align-items-center justify-content-center gap-2">
              {" "}
              <input
                type={"radio"}
                name="Gender"
                value={"Male"}
                onChange={onChange}
              />
              <label for="Male">Male</label>
            </div>
            <div className="border p-2  rounded border-dark col-10 col-xl-5 col-lg-5 col-md-4 mx-auto  mt-2 mt-xl-0 mt-lg-0 mt-md-0 d-flex  align-items-center justify-content-center   gap-2">
              <input
                type={"radio"}
                name="Gender"
                value={"Female"}
                onChange={onChange}
              />
              <label for="Female">Female</label>
            </div>

            {""}
          </div>
          <p class="text-danger">{errors.Gender}</p>
          <div className="pt-3">
            <button
              onClick={handleSubmit}
              className="border-0 rounded bg-success p-2 text-light p-2 col-xl-8 col-lg-8 col-md-8 col-10  "
            >
              Signup
            </button>{" "}
            <div className="pb-xl-3 pb-lg-1 pb-md-1 pb-1 pt-2">
              <p href="#" className="text-primary ">
                Already have an Account ?{" "}
                <span>
                  <button
                    className="border-0 text-primary   "
                    onClick={reDirect2}
                  >
                    Login
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
