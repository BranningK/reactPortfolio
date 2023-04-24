import React from 'react';
import '../styles/Footer.css';
import githubLogo from '../assets/githubLogo.png'
import twitterLogo from '../assets/twitterLogo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Footer() {
    return(
        <footer className='App-footer'>
            <ul>
                <img src={githubLogo} alt="Github Logo"/>
                <img src={twitterLogo} alt="Twitter Logo" />
                <li>LinkedIn</li>
            </ul>
        </footer>
    )
}

export default Footer;