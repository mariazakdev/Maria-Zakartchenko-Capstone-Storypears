import PearsLogo from "../../assets/logos/pera-architetto-francesc-01 (1).png";
import "./Logo.scss";

function Logo() {
    return (
        <div className="logo">
            <img
                className="logo__image"
                src={PearsLogo}
                alt="Pears logo"
            />
            <span className="logo__text">Story Pears</span> {/* Added this line */}
        </div>
    );
}

export default Logo;