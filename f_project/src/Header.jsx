import NavBar from './NavBar.jsx';
import ModeChange from "./ModeChange.jsx";

function Header() {
return (
    <header className="header">
        <h1 classname="logo">Demo website</h1>
        <NavBar></NavBar>
        <ModeChange></ModeChange>
    </header>
);
}

export default Header;
