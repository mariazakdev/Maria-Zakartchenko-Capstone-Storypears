import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { v4 as uuidv4 } from "uuid";
import "./ProfileAdd.scss";

function ProfileAdd() {
  const navigate = useNavigate();
  const newId = uuidv4();

  const [userName, setUserName] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [penFirstName, setPenFirstName] = useState("");
  const [penLastName, setPenLastName] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});
  const [bioCharacterCount, setBioCharacterCount] = useState(0);

  const createNewUser = () => {
    axios
      .post("http://localhost:8080/users", {
        id: newId,
        username: userName,
        password: passwordOne,
        password2: passwordOne,
        email: email,
        first_name: firstName,
        last_name: lastName,
        pen_first_name: penFirstName,
        pen_last_name: penLastName,
        bio: bio,
      })
      .then(response => {
        console.log("Profile created successfully:", response.data);
        navigate(`/profile/${newId}`);
      })
      .catch(error => {
        console.error("Error creating profile:", error);
      });
  };


  const handleRegisterUser = event => {
    event.preventDefault();

    const newErrors = {};

    if (!userName) {
      newErrors.userName = "Please enter a username";
    }
    if (!passwordOne) {
      newErrors.passwordOne = "Please create a password";
    }
    if (!passwordTwo) {
      newErrors.passwordTwo = "Please repeat the password";
    }
    if (!email) {
      newErrors.email = "Please enter an email";
    }
    if (!firstName) {
      newErrors.firstName = "Please enter your first name";
    }
    if (!lastName) {
      newErrors.lastName = "Please enter your last name";
    }
    if (!penFirstName) {
      newErrors.penFirstName = "Please enter at least a first pen name";
    }

    setErrors(newErrors);
    if(Object.keys(newErrors).length === 0){
      createNewUser();
      navigate(`/profile/${newId}`);
    }else {
      console.log("Errors found:", newErrors);
    }
    
  };

  const handleItemNameFocus = () => {
    setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
  };

  const handlePasswordOneFocus = () => {
    setErrors((prevErrors) => ({ ...prevErrors, passwordOne: "" }));
  };

  const handlePasswordTwoFocus = () => {
    setErrors((prevErrors) => ({ ...prevErrors, passwordTwo: "" }));
  };

  const handleEmailFocus = () => {
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleFirstNameFocus = () => {
    setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
  };

  const handleLastNameFocus = () => {
    setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
  };

  const handlePenFirstNameFocus = () => {
    setErrors((prevErrors) => ({ ...prevErrors, penFirstName: "" }));
  };

  


  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === "bio") {
      setBioCharacterCount(value.length);
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
            value={userName}
            onChange={handleInputChange}
            onFocus={handleItemNameFocus}
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
            value={passwordOne}
            onChange={handleInputChange}
            onFocus={handlePasswordOneFocus}
            placeholder="Create a password"
            className={`input ${errors.passwordOne ? "input--error" : ""}`}
            required
          />
          {errors.passwordOne && <ErrorMessage content={errors.passwordOne} />}
  
          <label htmlFor="password2">Password:</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={passwordTwo}
            onChange={handleInputChange}
            onFocus={handlePasswordTwoFocus}
            placeholder="Repeat a password"
            className={`input ${errors.passwordTwo ? "input--error" : ""}`}
            required
          />
          {errors.passwordTwo && <ErrorMessage content={errors.passwordTwo} />}
  
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            onFocus={handleEmailFocus}
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
            value={firstName}
            onChange={handleInputChange}
            onFocus={handleFirstNameFocus}
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
            value={lastName}
            onChange={handleInputChange}
            onFocus={handleLastNameFocus}
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
            value={penFirstName}
            onChange={handleInputChange}
            onFocus={handlePenFirstNameFocus}
            placeholder="Name to be used on site"
            className={`input ${errors.penFirstName ? "input--error" : ""}`}

            required
          />
          {errors.penFirstName && <ErrorMessage content={errors.penFirstName} />}
  
          <label htmlFor="pen_last_name">Pen Last Name:</label>
          <input
            type="text"
            id="pen_last_name"
            name="pen_last_name"
            value={penLastName}
            onChange={handleInputChange}
            placeholder="Last name optional"
            required
          />
  
          <label htmlFor="bio">Bio:</label>
          <div className="form__count">
            <textarea
              id="bio"
              name="bio"
              value={bio}
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
  
          <input className="form__button" type="submit" value="Create Profile" />
        </form>
      </section>
    </div>
  );

}

export default ProfileAdd;
