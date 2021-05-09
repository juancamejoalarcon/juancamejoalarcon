import React, { Component } from 'react';



export default class Home extends Component<unknown, { blogsList: any[] }> {

  constructor(props: { blogsList: any[] }) {
    super(props);
    this.state = {
      blogsList: []
    };
  }

  getAllBlogs = (): void => {
    this.setState({ blogsList: [
      {
        title: 'cosa',
        description: 'Lorem ipsum'
      },
      {
        title: 'cosa2',
        description: 'Lorem ipsum2'
      },
      {
        title: 'cosa3',
        description: 'Lorem ipsum3'
      },
    ],
    })
  }

  render(): JSX.Element {
    return (
      <div>
          <p>Blogs</p>

          <div>
          {this.state.blogsList.map((blog: any, index: any) => 
            <div key={index}>{blog.title}, {blog.description}</div>
          )}
        </div>
        <button onClick={() => this.getAllBlogs()}> Reload</button>
      </div>
    );
  }
}