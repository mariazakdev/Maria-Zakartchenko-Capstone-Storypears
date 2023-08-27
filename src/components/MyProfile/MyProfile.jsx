import Avatar from "../Avatar/Avatar";
import './MyProfile.scss';

function MyProfile({userData}) {


  return (
    <section className="profile">
      <h2>This is your lovely writer space. Let's get to know you.</h2>
        <div className="profile-greeting"> 
          <h2>Welcome, {userData.pen_first_name} {userData.pen_last_name}!</h2>
          <div>
            <Avatar className="avatar__image-sm"/>
          </div>
          <div className="profile-info">
            <h3>Bio:</h3>
            <p className="profile-info__bio">{userData.bio}</p>
          </div >

          <div className="profile-info">
            <h3>Links:</h3>
            <p className="profile-inf__links">facebook.com</p>
          </div >
            <div className="profile-info">
            <h3>Pear Tree:</h3>
            <p className="profile-inf__links">facebook.com</p>
          </div >


        </div>
    </section>
  );
}

export default MyProfile;