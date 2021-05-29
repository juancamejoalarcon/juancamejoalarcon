import React from 'react';
import './cv.scss'

import experienceService from 'services/experience.service'

export class CV extends React.Component<unknown, { experiences: any[] }> {

  constructor(props: { lastWork: any[] }) {
    super(props);
    this.state = {
      experiences: []
    };
}

  componentDidMount() {
    experienceService.getExperiences().then(experiences => this.setState({ experiences }))
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

  render() {
    return (
      <div className="cv">
        <div className="cv__container">
          <h2>Mi experiencia</h2>
          <div className="cv__download">
            <a className="jca-button" href="https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/CV.docx" target="_blank" rel="noreferrer">
              CV .word
            </a>
            <a className="jca-button" href="https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/CV.pdf" target="_blank" rel="noreferrer">
              CV .pdf
            </a>
          </div>
          <this.Experiencies />
        </div>
      </div>
    );
  }
}