import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom"


function ProfileList({profileData}){
    return(
        <div>
        <h2>Profile List</h2>
        <ul>
          {profileData.map(profile => (
            <li key={profile.id}>
                <Link to={`/writers/${profile.id}`}>
                <Avatar className="avatar__image-bg"/>
              <p>{profile.pen_first_name}{profile.pen_last_name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};
export default ProfileList;  