import NavBar from './Component/NavBar.jsx';
import ModeChange from "./Component/ModeChange.jsx";
import Logo from "./logo.jsx";
import {Link} from "react-router-dom";
import SecurityPrivacy from "./Component/security-privacy.jsx";

function Header() {
return (
    <header className="header">
        <h1 className="logo">Demo website</h1>
        <NavBar></NavBar>
    </header>
);
}

export default Header;
