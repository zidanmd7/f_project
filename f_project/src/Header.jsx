function Header() {
return (
    <header className="header">
    <h1>Demo website</h1>

    <nav className="nav">
        <div className="dropdown">
            <button className="dropbtn" type="button">Option 1 ▾</button>
            <div className="dropdown-content">
                <a href="#one-a">Option 1A</a>
                <a href="#one-b">Option 1B</a>
                <a href="#one-c">Option 1C</a>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn" type="button">Option 2 ▾</button>
            <div className="dropdown-content">
                <a href="#two-a">Option 2A</a>
                <a href="#two-b">Option 2B</a>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn" type="button">Option 3 ▾</button>
                <div className="dropdown-content">
                <a href="#three-a">Option 3A</a>
                <a href="#three-b">Option 3B</a>
            </div>
        </div>

        <div className="dropdown">
        <button className="dropbtn" type="button">Option 4 ▾</button>
            <div className="dropdown-content">
                <a href="#four-a">Option 4A</a>
                <a href="#four-b">Option 4B</a>
            </div>
        </div>
    </nav>
    </header>
);
}

export default Header;
