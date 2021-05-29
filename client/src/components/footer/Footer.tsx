import React from 'react';
import './footer.scss';

type FooterProps = {}
type FooterState = {
  showFooterShadow: boolean;
}
class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {
      showFooterShadow: false
    }
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__social-links">
            <ul className="jca-social-icons medium-icons">
              <li>
                <a href="https://www.instagram.com/juancamejoalarcon/"
                ><i className="fa fa-instagram" /></a
                >
              </li>
              <li>
                <a href="https://twitter.com/juancamejoalarc/"
                ><i className="fa fa-twitter" /></a
                >
              </li>
              <li>
                <a href="https://www.linkedin.com/in/juan-camejo-alarc%C3%B3n-87692873/"
                ><i className="fa fa-linkedin" /></a
                >
              </li>
              <li>
                <a href="https://github.com/juancamejoalarcon/"
                ><i className="fa fa-github" /></a
                >
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
