import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {

  return (
    <nav>
      <h3 className = 'headerH3'>Welcome</h3>
      <ul className="nav-links">
        
          <Link to="./login">
          <button><li>Login</li></button>
          </Link>
     
          <Link to="./signup">
          <button><li>Signup</li></button>
          </Link>
        
      </ul>
    </nav>
  );
};

export default Nav;
