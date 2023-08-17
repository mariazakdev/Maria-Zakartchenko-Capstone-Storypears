import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { v4 as uuidv4 } from "uuid";
import "./SignIn.scss";

function SignIn() {
  const navigate = useNavigate();
  const newId = uuidv4();
  const userNameRef = useRef(null);
  const passwordOneRef = useRef(null);

  const [errors, setErrors] = useState({});

  const userLogIn = () => {
    axios
      .post("http://localhost:8080/users", {
        id: newId,
        username: userNameRef.current.value,
        password: passwordOneRef.current.value,
      })
      .then((response) => {
        console.log("Logged in successfully:", response.data);
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Error creating profile:", error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!userNameRef.current.value) {
      newErrors.userName = "Please enter a username";
    }
    if (!passwordOneRef.current.value) {
      newErrors.passwordOne = "Missing username or password";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      userLogIn();
    } else {
      console.log("Errors found:", newErrors);
    }
  };

  // Reset Input on focus and clear error
  const handleNameFocus = () => {
    userNameRef.current.value = '';
  
    setErrors({});
  };
  const handlePasswordFocus = () => {
    passwordOneRef.current.value = '';
  
    setErrors({});
  };

  return (
    <div className="sign-in-profile">
      <section className="sign-in-profile__heading">
        <h3>Sign In</h3>
      </section>

      <section className="sign-in-profile__form-wrapper">
        <form
          className="sign-in-profile__form-wrapper__form"
          method="post"
          action=""
          onSubmit={handleLogin}
          noValidate
        >
          {/* Username */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            ref={userNameRef}
            onFocus={handleNameFocus}            
            placeholder="Name for login"
            className={`input ${errors.userName ? "input--error" : ""}`}
            required
          />
          {/* {errors.userName && <ErrorMessage content={errors.userName} />} */}

          {/* Password */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordOneRef}
            onFocus={handlePasswordFocus}            
            className={`input ${errors.passwordOne ? "input--error" : ""}`}
            required
          />
          {errors.passwordOne && <ErrorMessage content={errors.passwordOne} />}

          <input
            className="form__button"
            type="submit"
            value="Sign In"
          />
        </form>
        <h4>Need an account?</h4>
        <h4>
          <a href="/profile/new">Sign Up</a>
        </h4>
      </section>
    </div>
  );
}

export default SignIn;
