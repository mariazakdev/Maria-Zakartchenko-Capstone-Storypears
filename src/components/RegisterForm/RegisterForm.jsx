import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Button from "../Button/Button";
import "./RegisterForm.scss";

function ProfileAdd() {
  const navigate = useNavigate();
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatedPasswordRef = useRef(null); // Separate ref for repeated password
  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const penFirstNameRef = useRef(null);
  const penLastNameRef = useRef(null);
  const bioRef = useRef(null);

  const [bioCharacterCount, setBioCharacterCount] = useState(0);
  const [errors, setErrors] = useState({});

  const createNewUser = () => {
    axios
      .post("http://localhost:8080/auth/register", {
        username: userNameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        pen_first_name: penFirstNameRef.current.value,
        pen_last_name: penLastNameRef.current.value,
        bio: bioRef.current.value,
      })
      .then((response) => {
        console.log("Profile created successfully:", response.data);
        navigate(`/profile`);
      })
      .catch((error) => {
        console.error("Error creating profile:", error);
      });
  };

  // Validation functions:
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isLettersOnly = (input) => {
    const lettersRegex = /^[A-Za-z]+$/;
    return lettersRegex.test(input);
  };

  const isPasswordEmpty = (password) => {
    return password.trim() === "";
  };

  const handleRegisterUser = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!userNameRef.current.value) {
      newErrors.userName = "Please enter a username";
    }

    if (isPasswordEmpty(passwordRef.current.value)) {
      newErrors.password = "Please create a password";
    }

    // Check for matching passwords
    if (passwordRef.current.value !== repeatedPasswordRef.current.value) {
      newErrors.passwordMatch = "Passwords do not match";
    }

    if (!emailRef.current.value) {
      newErrors.email = "Please enter an email";
    } else if (!isEmailValid(emailRef.current.value)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!firstNameRef.current.value) {
      newErrors.firstName = "Please enter your first name";
    } else if (!isLettersOnly(firstNameRef.current.value)) {
      newErrors.firstName = "Please enter a valid first name (letters only)";
    }

    if (!lastNameRef.current.value) {
      newErrors.lastName = "Please enter your last name";
    } else if (!isLettersOnly(lastNameRef.current.value)) {
      newErrors.lastName = "Please enter a valid last name (letters only)";
    }

    if (!penFirstNameRef.current.value) {
      newErrors.penFirstName = "Please enter at least a first pen name";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      createNewUser();
    } else {
      console.log("Errors found:", newErrors);
    }

    
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "bio") {
      setBioCharacterCount(value.length);
    }
  };

  const handleInputFocus = (refName) => {
    if (refName.current) {
      refName.current.value = "";
      setErrors((prevErrors) => ({ ...prevErrors, [refName.current.name]: "" }));
    }
  };

  return (
    <div className="create-profile">
      <section className="create-profile__heading">
        <h3>Create your writer profile</h3>
      </section>

      <section className="create-profile__form-wrapper">
        <form
          className="create-profile__form-wrapper__form"
          method="post"
          action=""
          onSubmit={handleRegisterUser}
          noValidate
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            ref={userNameRef}
            onFocus={() => handleInputFocus(userNameRef)}
            placeholder="Name for login"
            className={`input ${errors.userName ? "input--error" : ""}`}
            required
          />
          {errors.userName && <ErrorMessage content={errors.userName} />}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            onFocus={() => handleInputFocus(passwordRef)}
            placeholder="Create a password"
            className={`input ${errors.password ? "input--error" : ""}`}
            required
          />
          {errors.password && <ErrorMessage content={errors.password} />}

          <label htmlFor="password2">Repeat Password:</label>
          <input
            type="password"
            id="password2"
            name="password2"
            ref={repeatedPasswordRef}
            onFocus={() => handleInputFocus(repeatedPasswordRef)}
            placeholder="Repeat your password"
            className={`input ${errors.passwordMatch ? "input--error" : ""}`}
            required
          />
          {errors.passwordMatch && (
            <ErrorMessage content={errors.passwordMatch} />
          )}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            onFocus={() => handleInputFocus(emailRef)}
            placeholder="Email for login"
            className={`input ${errors.email ? "input--error" : ""}`}
            required
          />
          {errors.email && <ErrorMessage content={errors.email} />}

          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            ref={firstNameRef}
            onFocus={() => handleInputFocus(firstNameRef)}
            placeholder="Not visible on site"
            className={`input ${errors.firstName ? "input--error" : ""}`}
            required
          />
          {errors.firstName && <ErrorMessage content={errors.firstName} />}

          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            ref={lastNameRef}
            onFocus={() => handleInputFocus(lastNameRef)}
            placeholder="Not visible on site"
            className={`input ${errors.lastName ? "input--error" : ""}`}
            required
          />
          {errors.lastName && <ErrorMessage content={errors.lastName} />}

          <label htmlFor="pen_first_name">Pen First Name:</label>
          <input
            type="text"
            id="pen_first_name"
            name="pen_first_name"
            ref={penFirstNameRef}
            onFocus={() => handleInputFocus(penFirstNameRef)}
            placeholder="Name to be used on site"
            className={`input ${errors.penFirstName ? "input--error" : ""}`}
            required
          />
          {errors.penFirstName && (
            <ErrorMessage content={errors.penFirstName} />
          )}

          <label htmlFor="pen_last_name">Pen Last Name:</label>
          <input
            type="text"
            id="pen_last_name"
            name="pen_last_name"
            ref={penLastNameRef}
            onFocus={() => handleInputFocus(penLastNameRef)}
            onChange={handleInputChange}
            placeholder="Last name optional"
            required
          />

          <label htmlFor="bio">Bio:</label>
          <div className="form__count">
            <textarea
              id="bio"
              name="bio"
              ref={bioRef}
              onFocus={() => handleInputFocus(bioRef)}
              onChange={handleInputChange}
              placeholder="Tell us something about yourself"
              rows="4"
              cols="50"
              maxLength={500}
              autoFocus
            />
            <div className="form__count-num">
              <span
                id="current"
                className={
                  bioCharacterCount >= 400 ? "form__count-num--warning" : ""
                }
              >
                {bioCharacterCount}
              </span>
              <span id="maximum"> / 500</span>
            </div>
          </div>
          <Button
            value="Create Profile"
            className="form__button"
            type="submit"
          />
        </form>
      </section>
    </div>
  );
}

export default ProfileAdd;
