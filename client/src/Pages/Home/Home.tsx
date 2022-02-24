import React from 'react';
import githubService from 'services/github.service'
import experienceService from 'services/experience.service'
import './home.scss';



export class Home extends React.Component<unknown, { lastWork: any[], experiences: any[] }> {

  constructor(props: { lastWork: any[] }) {
    super(props);
    this.state = {
      lastWork: [],
      experiences: []
    };
}

  Cards = (): JSX.Element => {
    return (
      <div className="portfolio-section__cards">
        {this.state.lastWork.map((work, index) =>
          <div className="card -home-card" key={index}>
            <div className="card__thumb">
              <a target="_blank" href={work.link} rel="noreferrer">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="post-img" />
              </a>
            </div>
            <div className="card__content">
              <h4>
                <a href="{work.link}">{work.repo}</a>
              </h4>
              <p>{work.description}</p>
              <a className="card__content__read-more" target="_blank" href={work.link} rel="noreferrer">Ver</a>
            </div>
          </div>
        )}
      </div>
    );
  }

  Experiencies = (): JSX.Element => {
    return (
      <div className="jca-timeline">
        {this.state.experiences.map((experience, index) =>
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

  componentDidMount() {
    githubService.getPinnedRepos().then((lastWork) => {
      this.setState({ lastWork })
    })
    experienceService.getExperiences().then((experiences) => {
      this.setState({ experiences })
    })
  }

  render(): JSX.Element {
    return (
      <div>
        <section className="banner-section">
          <div className="banner-section__container">
            <div className="container">
              <div className="banner-section__content">
                <h3>Hola! Soy</h3>
                <h1>Juan Camejo</h1>
                <h4>Desarrollador Front-End</h4>
                {/* <p>un desarrollador Front-end Senior de Madrid.</p> */}
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
              <h2>Sobre mí</h2>
              <p>Desarrollador web</p>
            </div>
            <div className="about-section__wrapper">
              <div className="about-section__wrapper__container">
                <p>Soy un desarrollador web nacido en Tenerife y viviendo en Madrid. Tengo 5 años de experiencia en los cuales me he especializado en el desarrollo Front-end, aunque también he trabajado como Back-end. Trato de combinar mi trabajo con mis proyectos personales. Creo que como desarrollador siempre hay que usar la tecnología adecuada al tipo de proyecto, por eso uso Javascript para todo :P</p>
                <p>Además de lo anterior, también soy el creador de dos proyectos:</p>
                <ul>
                  <li>
                    <a href="https://www.automatikdocs.com">Automatik Docs</a>
                  </li>
                  <li>
                    <a href="https://www.dedicatucancion.com">Dedica tu canción</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-section">
          <div className="container">
            <div className="portfolio-section__title">
              <h2>Últimos trabajos</h2>
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