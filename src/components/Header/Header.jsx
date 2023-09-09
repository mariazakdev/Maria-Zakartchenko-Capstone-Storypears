import "./Header.scss"
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';

function Header({ user, setUser }) {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className="header">
            <div className="header__logo-container" onClick={handleHome}>
                <Logo className="header__logo" />
            </div>
            <Nav user={user} setUser={setUser} className="header__nav" />
        </div>
    );
};

export default Header;
