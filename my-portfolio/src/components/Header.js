import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
    return(
        <header className="App-header">
            <h3><a href="/">Branning Knight</a></h3>
            <Router>
            <div className="nav">
                <NavLink
                to="/aboutme"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                About Me
                </NavLink>
                <NavLink
                to="/portfolio"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                Portfolio
                </NavLink>
                <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                Contact Me
                </NavLink>
                <NavLink
                to="/resume"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                Resume
                </NavLink>
            </div>
            </Router>
      </header>
    )

}


export default Header;