import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Navbar from "react-bootstrap";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarL() {
  return (
   
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Prehab
          </Link>
         
        </nav>
      );
    
  
}

export default NavbarL;
