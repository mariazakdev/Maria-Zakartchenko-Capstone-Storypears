import "./ProfileAdd.scss";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function ProfileAdd() {

  const history = useHistory();
  //Inputs
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
    first_name: "",
    last_name: "",
    pen_first_name: "",
    pen_last_name: "",
    bio: "",
  });
  //Updating forms
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        formData
      );
      console.log("Profile created successfully:", response.data);
      history.push(`/profile/${response.data.id}`);
    } catch (error) {
      console.error("Error creating profile:", error);
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
          action="/create-profile"
          method="post"
          onSubmit={handleSubmit}
        >
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Name for login"
            required
          />
          <ErrorMessage />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create a password"
            required
          />
            <ErrorMessage />
          <label for="password2">Password:</label>
          <input
              type="password"
              id="password2"
              name="password2"
              value={formData.password2}
              onChange={handleInputChange}
              placeholder="Repeat a password"
              required
          />
              <ErrorMessage />
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email for login"
            required
          />
              <ErrorMessage />
          <label for="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            placeholder="Not visible on site"
            required
          />
              <ErrorMessage />
          <label for="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            placeholder="Not visible on site"
            required
          />
              <ErrorMessage />
          <label for="pen_first_name">Pen First Name:</label>
          <input
            type="text"
            id="pen_first_name"
            name="pen_first_name"
            value={formData. pen_first_name}
            onChange={handleInputChange}
            placeholder="Name to be used on site"
            required
          />
              <ErrorMessage />
          <label for="pen_last_name">Pen Last Name:</label>
          <input
            type="text"
            id="pen_last_name"
            name="pen_last_name"
            value={formData. pen_last_name}
            onChange={handleInputChange}
            placeholder="Last name optional"
            required
          />

          <label for="bio">Bio:</label>
          <div className="form__count">
                          <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            placeholder="Tell us something about yourself"
                            rows="4"
                            cols="50"
                            maxlength="1000"
                            autoFocus
                          />
          <div className="form__count-num">
           <span id="current">0</span>
           <span id="maximum">/500</span>
          </div>
             </div>
            <ErrorMessage />
          <input className="form__button" type="submit" value="Create Profile" />
        </form>
      </section>
    </div>
  );
}

export default ProfileAdd;
