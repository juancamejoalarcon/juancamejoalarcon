import React from 'react';
import ReactQuill from 'react-quill';
import './blog-creator.scss'

import apiService from 'services/api.service'

type BlogState =  { 
  title: string, 
  description: string,
  category: string,
  body: string 
}

export class BlogCreator extends React.Component<unknown, BlogState> {

  constructor(props: { blogsList: any[] }) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: 'other',
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
  setCategory = (category: string) => {
    this.setState({ category })
  }

  saveBlog = () => {
    apiService.saveBlog(this.state).then((data) => {
      console.log('----');
      console.log(data);
      console.log('----')
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
                  <textarea 
                  onChange={(e: any) => this.setDescription(e.target.value)}
                  placeholder=" " 
                  />
                  <label>Descripción</label>
              </div>
            </div>
            <div className="blog-creator__category">
              <div className="jca-select">
                    <label>Categoría</label>
                    <select onChange={(e: any) => this.setCategory(e.target.value)}>
                        <option value="programming">Programación</option>
                        <option value="other">Other</option>
                    </select>
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
      </div>
    );
  }
}