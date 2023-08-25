import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Avatar from '../../assets/icons/5847fafdcef1014c0b5e48ce.png';
import './MyProfile.scss';

function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <section className="profile">
      <h2>This is your lovely writer space. Let's get to know you.</h2>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <div>
            <h3>
              {user.pen_first_name} {user.pen_last_name}
            </h3>
            <img src={Avatar} alt="Avatar" className="avatar__image-med" />
          </div>
          <div>
            <h3>Bio:</h3>
            <p>{user.bio}</p>
          </div>
        </div>
      ) : (
        <div>Please log in.</div>
      )}
    </section>
  );
}

export default MyProfile;