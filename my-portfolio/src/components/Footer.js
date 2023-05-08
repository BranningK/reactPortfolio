import React from 'react';
import '../styles/Footer.css';
import githubLogo from '../assets/githubLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import linkedInLogo from '../assets/linkedInLogo.png';
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
                <a href='https://github.com/BranningK'><img src={githubLogo} alt="Github Logo"/></a> 
                <a href='https://twitter.com/BranningK'><img src={twitterLogo} alt="Twitter Logo" /></a>
                <a href='https://www.linkedin.com/in/branning-knight-496353256/'><img src={linkedInLogo} alt="LinkedIn Logo" /></a>
            </ul>
        </footer>
    )
}

export default Footer;