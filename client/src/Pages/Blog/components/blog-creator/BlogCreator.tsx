import React from 'react';
import ReactQuill from 'react-quill';
import './blog-creator.scss'

import apiService from 'services/api.service'

export class BlogCreator extends React.Component<unknown, { title: string, description: string, body: string }> {

  constructor(props: { blogsList: any[] }) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
    };
  }

  getHTML = (body: string) => {
    this.setState({ body })
  }

  setTitle = (title: string) => {
    this.setState({ title })
  }
  setDescription = (description: string) => {
    this.setState({ description })
  }

  saveBlog = () => {
    apiService.saveBlog(this.state).then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="blog-creator">
        <div className="blog-creator__container">
          <h1>Blog Creator</h1>
          <div className="blog-creator__form">
            <div className="blog-creator__title">
              <div className="jca-input-text">
                <input
                  type="text"
                  autoComplete="disabled"
                  autoCorrect="off"
                  autoCapitalize="characters"
                  spellCheck="false"
                  placeholder=" "
                  aria-label="Título"
                  name="title"
                  onChange={(e: any) => this.setTitle(e.target.value)}
                />
                <label>Título</label>
              </div>
            </div>
            <div className="blog-creator__description">
              <div className="jca-textarea">
                  <textarea placeholder=" " />
                  <label>Descripción</label>
              </div>
            </div>
            <div className="blog-creator__quill">
              <ReactQuill theme="snow" value={this.state.body} onChange={this.getHTML} />
            </div>
            <div className="blog-creator__save">
            <button className="jca-button" type="button" onClick={() => this.saveBlog()}>
              Guardar
            </button>
            </div>
          </div>
        </div>
        {/*
        <input type="text" name="description" onChange={(e: any) => this.setDescription(e.target.value)}/>*/}
      </div>
    );
  }
}