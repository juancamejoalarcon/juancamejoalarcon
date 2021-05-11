import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
    this.setState({body})
  }

  setTitle = (title: string) => {
    this.setState({title})
  }
  setDescription = (description: string) => {
    this.setState({description})
  }

  saveBlog = () => {
    apiService.saveBlog(this.state).then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <div>
        <input type="text" name="title" onChange={(e: any) => this.setTitle(e.target.value)}/>
        <input type="text" name="description" onChange={(e: any) => this.setDescription(e.target.value)}/>
        <ReactQuill theme="snow" value={this.state.body} onChange={this.getHTML} />
        <button type="button" onClick={() => this.saveBlog()}>
          Guardar
        </button>
      </div>
    );
  }
}