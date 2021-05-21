import React, { Component } from 'react';
import './home.scss';



export class Home extends Component {


  render(): JSX.Element {
    return (
      <div>
        <section className="banner-section">
          <div className="banner-section__container">
            <div className="container">
              <div className="banner-section__content">
              <h3>Wellcome! I'M</h3>
                <h1>Juan Camejo</h1>
                <h4>Web Developer</h4>
                <p>Lorem ipsum dolor sit amet,Stet clita kasd gubergren,  no sea takimata sanctus est Lorem ipsum dolor sit amet.  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              </div>
            </div>
          </div>
          <svg className="waves" viewBox="0 24 150 28"
            preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(245, 249, 254)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgb(245, 249, 254)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgb(245, 249, 254)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(245, 249, 254)"></use>
            </g>
          </svg>
        </section>
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-section__header">
              <h2>About me</h2>
              <p>Graphice Designer and Web Designer</p>
            </div>
            <div className="about-section__wrapper">
              <div className="about-section__wrapper__container">
                  <p>Hi! My name is Wesley Kennedy. I am a full scale graphic designer. An experienced visual artist, committed to pixel perfect results. I am an expert in full brand development and corporate visual identity; from your logo, through all of your printed materials, up to your full online presence. A web designer, following the latest trends in brand/user communication.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}