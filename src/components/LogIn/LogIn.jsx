import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Button from "../Button/Button";
import "./LogIn.scss";

function LogIn({ handleLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-in-profile">
      <section className="sign-in-profile__heading">
        <h3>Log In</h3>
      </section>

      <section className="sign-in-profile__form-wrapper">
        <form
          className="sign-in-profile__form-wrapper__form"
          onSubmit={(event) => handleLogin(event, formData)}
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
      </section>
      <section className="sign-in-profile__sign-up">
        <h4>Need an account?</h4>
        <h4>
          <a href="/register">Sign Up</a>
        </h4>
      </section>
    </div>
  );
}

export default LogIn;
