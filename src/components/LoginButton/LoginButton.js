import "./LoginButton.scss";
import { Link } from "react-router-dom";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LoginButton = () => {
  return (
    <div className="login">
    <Link to="/login" className="login-button">
        <span className="login-link__text">Login</span>
      </Link>
      
    </div>
  );
};

export default LoginButton;
