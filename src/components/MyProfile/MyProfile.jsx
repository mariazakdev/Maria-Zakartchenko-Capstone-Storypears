import Avatar from "../Avatar/Avatar";
import "./MyProfile.scss";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authService from '../../services/authService';

function MyProfile({userData}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedBio, setEditedBio] = useState('');
  const [editedLinks, setEditedLinks] = useState([]);
  const [editedPenFirstName, setEditedPenFirstName] = useState('');
  const [editedPenLastName, setEditedPenLastName] = useState('');
  const [bioCharacterCount, setBioCharacterCount] = useState(0);
  const bioRef = useRef(null);
  const penFirstNameRef = useRef(null);
  const penLastNameRef = useRef(null);
  
  useEffect(() => {
    setEditedBio(userData.bio || '');
    setEditedLinks(userData.links || []);
    setEditedPenFirstName(userData.pen_first_name || '');
    setEditedPenLastName(userData.pen_last_name || '');
    setBioCharacterCount(userData.bio?.length || 0);
  }, [userData]);

  const updateUser = async () => {
    try {
      const newUsername = `${editedPenFirstName.toLowerCase()}${editedPenLastName.toLowerCase()}`;
      const updatedData = {
        pen_first_name: editedPenFirstName,
        pen_last_name: editedPenLastName,
        username: newUsername,
        bio: editedBio,
        links: editedLinks,
      };

      const response = await authService.updateProfile(userData.id, updatedData);
      console.log("User data updated:", response);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const toggleButtonValue = () => {
    if (isEditMode) {
      updateUser();
    }
    setIsEditMode(!isEditMode);
  };

  const handleLinkChange = (index, newValue) => {
    const newEditedLinks = [...editedLinks];
    newEditedLinks[index] = newValue;
    setEditedLinks(newEditedLinks);
  };

  useEffect(() => {
    setBioCharacterCount(editedBio.length);
  }, [editedBio]);


  return (
    <section className="profile">
      <div className="profile-header">
        <h3>This is your lovely writer space. Let's get to know you.</h3>
        <button
          id="toggleButton"
          className="profile-info__btn"
          type="button"
          aria-label={isEditMode ? "Update" : "Edit"}
          onClick={toggleButtonValue}
        >
          {isEditMode ? "Update" : "Edit"}
        </button>
      </div>
{/* Pen Names section */}
<div className="profile-info">
  <h3>Pen Name / Username:</h3>
  {isEditMode ? (
    <div>
      <input
        type="text"
        className="profile-info__pen-name-edit"
        value={editedPenFirstName || ''}
        onChange={(e) => setEditedPenFirstName(e.target.value)}
        placeholder="First Name"
        ref={penFirstNameRef}
      />
      <input
        type="text"
        className="profile-info__pen-name-edit"
        value={editedPenLastName || ''}
        onChange={(e) => setEditedPenLastName(e.target.value)}
        placeholder="Last Name"
        ref={penLastNameRef}
      />
    </div>
  ) : (
    <p className="profile-info__pen-name">
      {userData.pen_first_name} {userData.pen_last_name}
    </p>
  )}
</div>
      <div className="profile-greeting">
       

        <div className="profile-info">
  <h3>Bio:</h3>
  {isEditMode ? (
    <>
      <textarea
        className="profile-info__bio-edit"
        value={editedBio}
        onChange={(e) => {
          if (e.target.value.length <= 500) {
            setEditedBio(e.target.value);
          }
        }}
        ref={bioRef}
        maxLength={500}
      />
      <div className="form__count">
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
    </>
  ) : (
    <p className="profile-info__bio">{editedBio}</p>
  )}
</div>


        {/* Links section */}
        <div className="profile-info">
  <h3>Links:</h3>
  {isEditMode ? (
    <div>
      {[...Array(3)].map((_, index) => (
        <div key={index}>
          <input
            type="text"
            className="profile-info__links-edit"
            value={editedLinks[index] || ''}
            onChange={(e) => handleLinkChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  ) : (
    <ul>
      {editedLinks.map((link, index) => (
        <li key={index}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </li>
      ))}
    </ul>
  )}
</div>

        {/* Pear Tree section */}
        <div className="profile-info">
          <h3>Pear Tree:</h3>
          <ul>
            <li>
              <a> I am a cute story</a>
            </li>
            <li>
              <a>I am another story</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
