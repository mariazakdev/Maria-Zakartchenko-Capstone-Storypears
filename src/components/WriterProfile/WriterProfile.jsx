import React from 'react';
import "./Profile.scss";
import Avatar from "../Avatar/Avatar";

function WriterProfile({ userData, setUserData}) {
  if (!userData) {
    return <div>🤷‍♀️ Couldn't find the data...</div>;
}
  return (
    <div className="profile">
      <h2>Writer Profile</h2>
      <div>
        <h3>{userData && userData.pen_first_name} {userData.pen_last_name}</h3>
        <Avatar className='avatar__image-med' />
      </div>
      <div>
        <h3>Bio:</h3>
        <p>{userData.bio}</p>
        <h3>Links:</h3>
        <p>{userData.links}</p>
      </div>
      <div>
        <h3>Pear Tree</h3>
        <p>Placeholder story1<span>with <Avatar className='avatar__image-sm' /></span></p>
        <p>Placeholder story2<span>with <Avatar className='avatar__image-sm' /></span> </p>
        <p>Placeholder story3<span>with <Avatar className='avatar__image-sm' /></span> </p>
      </div>
    </div>
  );
}

export default WriterProfile;