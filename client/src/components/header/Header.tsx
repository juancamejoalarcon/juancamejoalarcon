import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <nav className="header__navbar">
            <a className="header__navbar__logo" href="/">
              <img src="https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/logo-v2.svg" alt="logo" />
            </a>
            <input type="checkbox" className="header__navbar__burger-check"/>
            <div className="header__navbar__nav" >
              <ul className="header__navbar__nav__menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li><a href="#about" className="scroll-smoth">About</a></li>
                <li>
                  <Link to="/blog">Blog</Link>
                  {/* NO BORRAR SUBMENU
                  Añadir al padre "li" la clase menu_has_children 
                  <ul className="sub-menu">
                    <li><a href="index.html">Home One</a></li>
                    <li><a href="index2.html">Home Two</a></li>
                  </ul> */}
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
