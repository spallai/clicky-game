import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = props => (
  
      <nav className="navbar navbar-default fixed-top">
         <ul>
          <li className="itemLeft"><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Clicky Game
        </Link></li>
          <li className="itemCenter">Click an image to begin!<br></br>{props.winLose}</li>
          <li className="itemRight">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
      </nav>
    );

export default Navbar;