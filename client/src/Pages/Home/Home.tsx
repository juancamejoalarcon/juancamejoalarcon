import React, { Component } from 'react';
import './home.scss';



export class Home extends Component {

  lastWork = [
    {
      image: "https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/assets/blog/1.jpg",
      titulo: 'Aenean mattis tortor ac sapien molestie.',
      description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, At vero eos et accusam et justo duo dolores rebum.',
      link: 'https://github.com/juancamejoalarcon'
    },
    {
      image: "https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/assets/blog/1.jpg",
      titulo: 'Aenean mattis tortor ac sapien molestie.',
      description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, At vero eos et accusam et justo duo dolores rebum.',
      link: 'https://github.com/juancamejoalarcon'
    },
    {
      image: "https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/assets/blog/1.jpg",
      titulo: 'Aenean mattis tortor ac sapien molestie.',
      description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, At vero eos et accusam et justo duo dolores rebum.',
      link: 'https://github.com/juancamejoalarcon'
    },
  ];

  experiences = [
    {
      date: '2014-2015',
      company: 'Senior WordPress Developer',
      description: 'Lorem ipsum dolor sit amet,sed diam nonumy eirmod tempor invidunt.'
    },
    {
      date: '2014-2015',
      company: 'Senior WordPress Developer',
      description: 'Lorem ipsum dolor sit amet,sed diam nonumy eirmod tempor invidunt.'
    },
    {
      date: '2014-2015',
      company: 'Senior WordPress Developer',
      description: 'Lorem ipsum dolor sit amet,sed diam nonumy eirmod tempor invidunt.'
    },
    {
      date: '2014-2015',
      company: 'Senior WordPress Developer',
      description: 'Lorem ipsum dolor sit amet,sed diam nonumy eirmod tempor invidunt.'
    },
  ]

  Cards = (): JSX.Element => {
    return (
      <div className="portfolio-section__cards">
        {this.lastWork.map((work, index) =>
          <div className="card" key={index}>
            <div className="card__thumb">
              <a target="_blank" href={work.link} rel="noreferrer">
                <img src={work.image} alt="post-img" />
              </a>
            </div>
            <div className="card__content">
              <h4>
                <a href="blog-single.html">{work.titulo}</a>
              </h4>
              <p>{work.description}</p>
              <a className="card__content__read-more" target="_blank" href={work.link} rel="noreferrer">Read More</a>
            </div>
          </div>
        )}
      </div>
    );
  }

  Experiencies = (): JSX.Element => {
    return (
      <div className="jca-timeline">
        {this.experiences.map((experience, index) =>
          <div className="jca-timeline__element" key={index}>
            <div className="jca-timeline__element__inner">
              <span className="year">{experience.date}</span>
              <h4>{experience.company}</h4>
              <p>{experience.description}</p>
            </div>
          </div>
        )}
      </div>
    )
  }

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
            preserveAspectRatio="none" shapeRendering="auto">
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
        <section className="portfolio-section">
          <div className="container">
            <div className="portfolio-section__title">
              <h2>Last work</h2>
            </div>
            <this.Cards />
          </div>
        </section>
        <section className="experience-section">
          <div className="container">
            <div className="experience-section__title">
              <h2>Experiencia</h2>
            </div>
            <this.Experiencies />
          </div>
        </section>
      </div>
    );
  }
}