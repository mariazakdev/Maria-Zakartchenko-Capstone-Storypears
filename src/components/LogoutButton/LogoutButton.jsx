import "./LogoutButton.scss"
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LogoutButton = () => {
  return (
    <div className="logout">
    <Link to="/profile" className="avatar-link">
      <div className="logout-avatar-box">
        <Avatar className={"avatar__image-sm"} />
      </div>
    </Link>
      <a
        className="logout-link"
        href={`${SERVER_URL}/auth/logout`}
      >
        <span className="logout-link__text">Logout</span>
      </a>
    </div>
  );
};

export default LogoutButton;
