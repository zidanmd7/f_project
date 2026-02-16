import { use, useEffect, useState } from "react";
import { navItems } from "../assets/navigation_options.js";
import "./MobileNav.css";



export default function NavBar(){



    // Mobile navigation panel codes
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const onKeyDown = (e) => e.key === "Escape" && setMenuOpen(false);
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [] );
    // Mobile navigation panel codes


    useEffect (()=> {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [menuOpen]);
    






    return(
        <>
        

        {/* Desktop nav */}
        <nav className="desktop_nav">
            {navItems.map((group) => (
                <div className="dropdown" key={group.label}>
                    <button className="dropbtn" type="button">
                        {group.label} ▾
                    </button>

                    <div className="dropdown-content">
                        {group.items.map((item) => (
                            <a key={item.href} href={item.href}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </nav>
        {/* Desktop nav */}






        {/* mobile nav button */}

        <button
            className="mobile_nav"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
        >
            ☰ 
            </button>

        {/* mobile nav button */}






        {/* Backdrop */}
        <div
            className= {`backdrop ${menuOpen ? "show" : ""}`}
            onClick={closeMenu}
            aria-hidden={!menuOpen}
        />


        {/* side panel */}
        <aside className={`sidepanel ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
            <div className="sidepanel_header">
                <span className="sidepanel_title">Menu</span>
                <button className="close_button" type="button" onClick={closeMenu} aria-label="Close menu">
                    
                    x

                </button>
            </div>



            {/* collapseable groups in mobile */}
            <div>
                {navItems.map((group) => (
                    <details key={group.label} className="mobile_group">
                        <summary>{group.label}</summary>
                        <div className="mobile_items">
                            {group.items.map((item) => (
                                <a key={item.href} href={item.href} onClick={closeMenu}>
                                    {item.label}
                                </a>

                            ))}
                        </div>
                    </details>
                ))}
            </div>
        </aside>
    </>
    );
}