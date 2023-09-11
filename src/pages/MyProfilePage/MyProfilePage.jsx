import React, { useState, useEffect } from 'react';
import MyProfile from '../../components/MyProfile/MyProfile';

function ProfilePage() {
   // Temp while I learn to do log in code
   const userData= 
   {
        username:'jrwriter',
        id: 376,
        email: "jon@email.com",
        first_name: "Jon",
        last_name: "Rix",
        pen_first_name: "JR",
        pen_last_name: "Writer",
        bio: "I'm a passionate writer with a love for storytelling. My goal is to inspire and entertain readers with my words."
    }

  return (
   <div className='site'>
      <section className='site__content'>
        <MyProfile userData={userData}/>
      </section>
    </div>
  );
}

export default ProfilePage;
