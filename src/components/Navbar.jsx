import React , { useState} from "react";
import { Guitar } from 'lucide-react';
import { Link } from "react-router-dom"
import './Navbar.css';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="navbar">
            <div className="logo"><Guitar height="35px" width="35px" color="black" />
                <p>Nidhi Academy</p>
            </div>
            <button className="burger-menu" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
                <li>

                    HOME

                </li>
                <li>
                    ABOUT
                </li>
                <li>
                   TEAM
                </li>
                <li>REVIEWS</li>
            </ul>

            <div className="buttons">
                <button>Sign In</button>
            </div>
        </div>
    );
}
export default Navbar;