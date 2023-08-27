import Avatar from '../../assets/icons/5847fafdcef1014c0b5e48ce.png';
import './MyProfile.scss';

function MyProfile({userData}) {
  if (!userData) {
    // Display a loading message or an error message here
    return <p>Loading profile data...</p>; // Customize this message as needed
  }

  const { pen_first_name, pen_last_name, bio /* other properties */ } = userData;
  return (
    <section className="profile">
      <h2>This is your lovely writer space. Let's get to know you.</h2>
        <div>
          <h2>Welcome, {userData.pen_first_name} {userData.pen_last_name}!</h2>
          <div>
            <img src={Avatar} alt="Avatar" className="avatar__image-med" />
          </div>
          <div>
            <h3>Bio:</h3>
            <p>{userData.bio}</p>
          </div>
        </div>
    </section>
  );
}

export default MyProfile;