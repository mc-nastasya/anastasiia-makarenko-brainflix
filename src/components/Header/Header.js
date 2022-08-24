import "./Header.scss";
import BrainFlixLogo from "../../assets/icons/BrainFlix-logo.svg" 
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={BrainFlixLogo} alt="BrainFlix Logo"/>
            <nav className="nav">
                <div className="nav__search-bar">
                    <input className="nav__input" typeof="text" name="search" placeholder="Search"/>
                    <div className="nav__image-mobile"></div>
                </div>
                {<ButtonComponent addClass = "nav__button" buttonContent="Upload"/>}
                <div className="nav__image-notmobile"></div>
            </nav>
        </header>
    );
}

export default Header;