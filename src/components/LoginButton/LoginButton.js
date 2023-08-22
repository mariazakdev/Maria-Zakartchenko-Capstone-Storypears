import "./LoginButton";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LoginButton = () => {
  return (
    <div>
      <a
        className="login-button"
        href={`${SERVER_URL}/auth/google`}
      >
        <span className="login-button__text">Login</span>
      </a>
    </div>
  );
};

export default LoginButton;
