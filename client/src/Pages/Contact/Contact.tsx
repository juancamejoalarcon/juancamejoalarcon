import React from 'react';
import './contact.scss'


export class Contact extends React.Component<unknown, {}> {

  constructor(props: { lastWork: any[] }) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    document.querySelector('footer')?.classList.add('contact-footer')
  }

  componentWillUnmount() {
    document.querySelector('footer')?.classList.remove('contact-footer')
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__container">
          <div className="contact__content">
            <h4>Envíame un correo a</h4>
            <h1>juancamejo93@gmail.com</h1>
          </div>
        </div>
      </div>
    );
  }
}