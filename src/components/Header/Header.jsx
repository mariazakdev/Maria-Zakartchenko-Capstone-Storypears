import "./Header.scss"
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

function Header({user, setUser}){

return(
<div className="header">
<Logo />
<Nav user={user} setUser={setUser} />
</div>

    );
};
export default Header;