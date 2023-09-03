import "./Nav.scss";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";

const Nav = () => {

  return (
    <nav className="nav">
    <ul className="nav-list">
      <li>
        <Link to="/about">Why Join?</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
     
      <>
        <li>
          <Link to="/story/prompt">Prompts</Link>
        </li>
        <li>
          <Link to="/storytree">All Stories</Link>
        </li>
        <li>
          <Link to="/story/new">Writing Space</Link>
        </li>
        <li>
          <Link to="/stories/depot">Depot</Link>
        </li>
        <li>
          <Link to="/writers">Writers</Link>
        </li>
      </>
      
    </ul>
    <div className="nav-user">
       <LogoutButton /> <LoginButton />
    </div>
  </nav>
  );
};

export default Nav;
