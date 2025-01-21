import React from "react";
import { Guitar } from 'lucide-react';
import { Link } from "react-router-dom"
import './Navbar.css';
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"><Guitar height="35px" width="35px" color="#ECF0F1" />
                <p>FillFast</p>
            </div>

            <ul>
                <li>
                    {/* <Link to="/home"> Home</Link> */}
                    Home

                </li>
                <li>
                    {/* <Link to="/form">Form</Link> */}
                    Form
                </li>
                <li>
                    {/* <Link to="/user">User Profile</Link> */}
                    Profile
                </li>
            </ul>

            <div className="buttons">
                <button>Sign In</button>
            </div>
        </div>
    );
}
export default Navbar;