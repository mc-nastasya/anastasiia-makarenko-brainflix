import "./Header.scss";
import BrainFlixLogo from "../../assets/icons/BrainFlix-logo.svg" 
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={BrainFlixLogo} alt="BrainFlix Logo"/></Link>
            
            <nav className="nav">
                <div className="nav__search-bar">
                    <input className="nav__input" typeof="text" name="search" placeholder="Search"/>
                    <div className="nav__image-mobile"></div>
                </div>
                <Link to="/upload"><ButtonComponent addClass = "nav__button" buttonContent="Upload"/></Link>
                <div className="nav__image-notmobile"></div>
            </nav>
        </header>
    );
}

export default Header;