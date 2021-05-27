import React from 'react';
import apiService from 'services/api.service'
import './feed.scss'


export class Feed extends React.Component<unknown, { blogsList: any[] }> {

    constructor(props: { blogsList: any[] }) {
        super(props);
        this.state = {
            blogsList: []
        };
    }

    componentDidMount() {
        this.getAllBlogs();
    }

    getAllBlogs = (): void => {
        apiService.getAllblogs().then((blogsList) => {
            this.setState({ blogsList })
        })
    }

    render() {
        return (
            <div className="feed">
                <section className="feed__banner">
                    <div className="feed__banner__container">
                        <div className="container">
                            <div className="feed__banner__content">
                                <h4>Blog</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feed__grid">
                    <div className="feed__grid__container">
                    {this.state.blogsList.map((blog: any, index: any) =>
                        <div className="card" key={index}>
                            <div className="card__thumb">
                                <a href="blog-single.html"
                                ><img
                                        src="https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/assets/blog/1.jpg"
                                        alt="post-img"
                                    /></a
                                >
                                <a href="blog-grid.html" className="card__thumb__date"
                                ><span>26 jun</span></a
                                >
                            </div>
                            <div className="card__content">
                                <h4>
                                    <a href="blog-single.html">{blog.title}</a>
                                </h4>
                                <p>{blog.description}</p>
                                <a className="card__content__read-more" href="blog-single.html">Leer más</a>
                            </div>
                        </div>
                    )}
                    </div>
                </section>
            </div>
        )
        // return (
        //     <div className="feed">
        //         <p>Blogs</p>

        //         <div>
        //             {this.state.blogsList.map((blog: any, index: any) =>
        //                 <div key={index}>{blog.title}, {blog.description}</div>
        //             )}
        //         </div>
        //         <button onClick={() => this.getAllBlogs()}> Reload</button>
        //     </div>
        // );
    }
}