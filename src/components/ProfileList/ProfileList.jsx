import Avatar from "../Avatar/Avatar";

function ProfileList({profileData}){
    return(
        <div>
        <h2>Profile List</h2>
        <ul>
          {profileData.map(profile => (
            <li key={profile.id}>
                <link to={`/profile/${profile.id}`}>
                <Avatar className="avatar__image-bg"/>
              <p>{profile.pen_first_name}{profile.pen_last_name}</p>
              </link>
            </li>
          ))}
        </ul>
      </div>
    );
};
export default ProfileList;  