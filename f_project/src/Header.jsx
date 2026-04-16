import NavBar from './Component/NavBar.jsx';
import ModeChange from "./Component/ModeChange.jsx";
import Logo from "./logo.jsx";
import {Link} from "react-router-dom";
import SecurityPrivacy from "./Component/security-privacy.jsx";

function Header() {
return (
    <header className="header">

        <Link to={'/'} className="logo-click" >
            <Logo></Logo>
        </Link>

        <NavBar>
            <Link to={'/data-protection'} className="data-click">
                <SecurityPrivacy></SecurityPrivacy>
            </Link>
        </NavBar>
        <ModeChange></ModeChange>
    </header>
);
}

export default Header;
