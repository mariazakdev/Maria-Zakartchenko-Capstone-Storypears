import Avatar from "../Avatar/Avatar";
import "./MyProfile.scss";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function MyProfile({ userData }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedBio, setEditedBio] = useState(userData.bio);
  const [editedLinks, setEditedLinks] = useState(userData.links);
  const [editedPenFirstName, setEditedPenFirstName] = useState(userData.pen_first_name);
  const [editedPenLastName, setEditedPenLastName] = useState(userData.pen_last_name);
  
  const bioRef = useRef(null);
  const penFirstNameRef = useRef(null);
  const penLastNameRef = useRef(null);

  const [bioCharacterCount, setBioCharacterCount] = useState(userData.bio.length); // Initialize with the current bio length
  const toggleButtonValue = () => {
    if (isEditMode) {
      // Handle Update Button Click
      axios
        .put(`http://localhost:8080/users/${userData.id}`, {
          pen_first_name: editedPenFirstName,
          pen_last_name: editedPenLastName,
          bio: editedBio,
          links: editedLinks,
         
        })
        .then((response) => {
          // Handle successful update, e.g., show a success message
          console.log("User data updated:", response.data);
        })
        .catch((error) => {
          // Handle error, e.g., show an error message
          console.error("Error updating user data:", error);
        });
    }

    // Toggle edit mode regardless of whether it's an edit or update
    setIsEditMode(!isEditMode);
  };
  const handleLinkChange = (index, newValue) => {
    // Create a copy of the editedLinks array
    const newEditedLinks = [...editedLinks];
    // Update the link at the specified index
    newEditedLinks[index] = newValue;
    // Update the state with the new editedLinks array
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
  <h3>Pen Names:</h3>
  {isEditMode ? (
    <div>
      {/* Input fields for editing pen names */}
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
    // Display pen names as static text
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
