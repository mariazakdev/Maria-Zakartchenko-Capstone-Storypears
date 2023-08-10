import "./Nav.scss";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/story/prompt">Prompts</Link>
        </li>
        {/* Will not be in final, just want to see it while developing site */}
        <li>
          <Link to="/profile">Profile</Link> 
        </li>
        <li>
          <Link to="/stories">All Stories</Link>
        </li>
        <li>
          <Link to="/story">Story</Link>
        </li>
        <li>
          <Link to="/create-profile">Create Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;