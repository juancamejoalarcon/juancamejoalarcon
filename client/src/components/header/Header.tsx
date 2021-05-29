import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';

type HeaderProps = {}
type HeaderState =  {
  showHeaderShadow: boolean;
}
class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      showHeaderShadow: false
    }
  }

  addShadow() {
    if (window.scrollY > 90) this.setState({showHeaderShadow: true})
    else this.setState({showHeaderShadow: false})
  }

  componentDidMount() {
    this.addShadow.bind(this)
    window.addEventListener('scroll', this.addShadow.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.addShadow.bind(this))
  }
  render() {
    return (
      <header className={`header ${this.state.showHeaderShadow ? 'header-shadow' : ''}`} >
        <div className="header__container">
          <nav className="header__navbar">
            <Link className="header__navbar__logo" to="/">
              <img src="https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/logo-v2.svg" alt="logo" />
            </Link>
            <input type="checkbox" className="header__navbar__burger-check"/>
            <div className="header__navbar__nav" >
              <ul className="header__navbar__nav__menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cv">CV</Link>
                </li>
                {/* <li> */}
                  {/* <Link to="/blog">Blog</Link> */}
                  {/* NO BORRAR SUBMENU
                  Añadir al padre "li" la clase menu_has_children 
                  <ul className="sub-menu">
                    <li><a href="index.html">Home One</a></li>
                    <li><a href="index2.html">Home Two</a></li>
                  </ul> */}
                {/* </li> */}
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
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
