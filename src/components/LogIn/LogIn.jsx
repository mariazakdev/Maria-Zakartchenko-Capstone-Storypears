import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { v4 as uuidv4 } from "uuid";
import "./LogIn.scss";
import Google from "../../assets/icons/5847fafdcef1014c0b5e48ce.png"
import Button from "../Button/Button";

function SignIn() {
  const navigate = useNavigate();
  const newId = uuidv4();
  const userNameRef = useRef(null);
  const passwordOneRef = useRef(null);
  const [errors, setErrors] = useState({});

    // Not sure is I need a new backend or reuse user. will return to axios
  const userLogIn = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: userNameRef.current.value,
        password: passwordOneRef.current.value,
    
      });
      
      if (response.status === 200) {
        console.log("Logged in successfully:", response.data);
        navigate(`/`);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!userNameRef.current.value) {
      newErrors.userName = "Please enter a username";
    }
    if (!passwordOneRef.current.value) {
      newErrors.passwordOne = "Please enter a password";
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

  const google =()=>{
    window.open('http://localhost:8080/auth/google');
    }
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
            placeholder="Username"
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
            placeholder="Password"
            ref={passwordOneRef}
            onFocus={handlePasswordFocus}            
            className={`input ${errors.passwordOne ? "input--error" : ""}`}
            required
          />
          {errors.passwordOne && <ErrorMessage content={errors.passwordOne} />}
          <Button
            value="Log In"            
            className="form__button"
            type="submit" 
          />
        </form>
        <section className="sign-in-profile__form-wrapper--options">
          <h3>Sign in with</h3>
          <div className="options__login-btn google" onClick={google}>
          <img src={Google} alt="icon" className="icon"/>
          Google
          </div>
        
                          
        </section>
        <h4>Need an account?</h4>
        <h4>
          <a href="/register">Sign Up</a>
        </h4>
      </section>
    </div>
  );
}

export default SignIn;