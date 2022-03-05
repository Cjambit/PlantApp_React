import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="mainNav">
            <Link className="navBar" to="/">Home</Link>
            <Link className="navBar" to="/Documentation">Documentation</Link>
        </nav>
    );
}

export default Navbar;