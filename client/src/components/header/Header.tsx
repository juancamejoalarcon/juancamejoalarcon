import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Home, CV, Blog } from './Pages'
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <nav className="header__navbar">
            <a className="header__navbar__logo" href="index.html">
              <img src="https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/logo-v2.svg" alt="logo" />
            </a>
            <div className="header__navbar__nav" >
              <ul className="header__navbar__nav__menu">
                <li className="menu_has_children"><a href="#intro" className="scroll-smoth">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Home One</a></li>
                    <li><a href="index2.html">Home Two</a></li>
                  </ul>
                </li>
                <li><a href="#about" className="scroll-smoth">About</a></li>
                <li><a href="#service" className="scroll-smoth">services</a></li>
                <li><a href="#blog" className="scroll-smoth">blog</a></li>
                <li className="menu_has_children"><a href="#intro">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="about.html">About page</a></li>
                  </ul>
                </li>
                <li><a href="#intro">Contact</a></li>
              </ul>
              <div className="header__navbar__nav__social">
                <ul className="jca-social-icons small-icons">
                  <li>
                    <a href="https://www.instagram.com/"
                    ><i className="fa fa-instagram" /></a
                    >
                  </li>
                  <li>
                    <a href="https://twitter.com/"
                    ><i className="fa fa-twitter" /></a
                    >
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/"
                    ><i className="fa fa-linkedin" /></a
                    >
                  </li>
                  <li>
                    <a href="https://github.com/"
                    ><i className="fa fa-github" /></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
