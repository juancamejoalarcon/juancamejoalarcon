import React, { Component } from 'react';
import apiService from 'services/api.service'


export class Feed extends Component<unknown, { blogsList: any[] }> {

    constructor(props: { blogsList: any[] }) {
        super(props);
        this.state = {
            blogsList: []
        };
    }

    getAllBlogs = (): void => {
        apiService.getAllblogs().then((blogsList) => {
            this.setState({ blogsList })
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