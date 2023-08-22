import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Button from "../Button/Button";
import "./LogIn.scss";

function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const userLogIn = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: formData.email,
        password: formData.password,
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

    if (!formData.email) {
      newErrors.email = "Please enter an email";
    }

    if (!formData.password) {
      newErrors.password = "Please enter a password";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      userLogIn();
    } else {
      console.log("Errors found:", newErrors);
    }
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
          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`input ${errors.email ? "input--error" : ""}`}
            required
          />
          {errors.email && <ErrorMessage content={errors.email} />}

          {/* Password */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`input ${errors.password ? "input--error" : ""}`}
            required
          />
          {errors.password && <ErrorMessage content={errors.password} />}
          <Button
            value="Log In"
            className="form__button"
            type="submit"
          />
        </form>

        <h4>Need an account?</h4>
        <h4>
          <a href="/register">Sign Up</a>
        </h4>
      </section>
    </div>
  );
}

export default LogIn;
