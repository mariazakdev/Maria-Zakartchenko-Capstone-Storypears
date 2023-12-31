import "./LogoutButton.scss"
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
const authUrl = process.env.REACT_APP_AUTH_URL;
// import authService from "../../services/authService";

const LogoutButton = ({ className }) => {
  // const handleLogout = () => {
  //   authService.logout();
  // };

  return (
    <div className={`logout ${className}`}>
    <Link to="/profile" className="avatar-link">
      <div className="logout-avatar-box">
        <Avatar className={"avatar__image-sm"} />
      </div>
    </Link>
      {/* <a
        className="logout-link"
        href={`${authUrl}/logout`}
      >
        <span className="logout-link__text" 
        // onClick={handleLogout} 
        >Logout</span>
      </a> */}
    </div>
  );
};

export default LogoutButton;
