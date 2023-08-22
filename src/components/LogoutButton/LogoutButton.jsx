import "./LogoutButton.scss"
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LogoutButton = () => {
  return (
    <div>
      <a
        className="logout-button nav__user-logout"
        href={`${SERVER_URL}/auth/logout`}
      >
        <span className="logout-button__text">Logout</span>
      </a>
    </div>
  );
};

export default LogoutButton;
