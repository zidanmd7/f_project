import NavBar from './Component/NavBar.jsx';
import ModeChange from "./Component/ModeChange.jsx";

function Header() {
return (
    <header className="header">
        <h1 className="logo">Demo website</h1>
        <NavBar></NavBar>
        <ModeChange></ModeChange>
    </header>
);
}

export default Header;
