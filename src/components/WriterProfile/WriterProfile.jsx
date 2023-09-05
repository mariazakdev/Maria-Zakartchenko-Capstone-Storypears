import React from 'react';
import "./WriterProfile.scss";
import Avatar from "../Avatar/Avatar";

function WriterProfile({ writerData}) {

return (
  <div className="profile">
    <h2>Writer Profile</h2>
    <div>
      <h3>{writerData && writerData.pen_first_name} {writerData.pen_last_name}</h3>
      <Avatar className='avatar__image-med' />
    </div>
    <div>
      <h3>Bio:</h3>
      <p>{writerData.bio}</p>
      <h3>Links:</h3>
      <p>{writerData.links}</p>
    </div>
    <div>
      {/* Must update when storytrees updated */}
      <h3>Pear Tree</h3>
      <p>Placeholder story1<span>with <Avatar className='avatar__image-sm' /></span></p>
      <p>Placeholder story2<span>with <Avatar className='avatar__image-sm' /></span> </p>
      <p>Placeholder story3<span>with <Avatar className='avatar__image-sm' /></span> </p>
    </div>
  </div>

  );
}

export default WriterProfile;