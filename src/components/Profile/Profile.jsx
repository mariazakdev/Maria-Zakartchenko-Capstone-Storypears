import React from 'react';
import "./Profile.scss";
import Avatar from "../Avatar/Avatar";

function Profile() {
  return (
    <div className="profile">
      <h2>My name</h2>
      <Avatar className='avatar__image-med' />
      <div>
        <h3>
          Bio:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            elementum nec sem quis finibus. Sed lorem magna, placerat vitae
            consequat in, blandit a odio. Maecenas condimentum eros ac leo
            lacinia, eget consectetur quam fermentum. Aliquam nec odio dui.
            Etiam nec massa id est dignissim rutrum consectetur a lorem. Mauris
            tristique bibendum ligula, eu malesuada orci dignissim ut. Donec
            tempor lectus tempor nulla ultrices pharetra.
          </p>
        
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

export default Profile;
