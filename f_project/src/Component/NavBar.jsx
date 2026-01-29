import { navItems } from "../assets/navigation_options.js";

function NavBar(){
    return(
        <nav>
        {navItems.map((option) => (
                <div className="dropdown" key={option.label}>
                    <button className="dropbtn" type="button">
                        {option.label}
                    </button>

                    <div className="dropdown-content">
                        {option.items.map((item) => (
                            <a key={item.href} href={item.href}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </nav>


    )
}
export default NavBar;