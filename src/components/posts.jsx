import React, { Component } from 'react';
class Posts extends Component {
    state = {}
    render() {
        const posts = this.props.posts;
        const isloading = this.props.isloading;
        if (isloading) {
            return <p>Loading ...</p>
        } else {
            return (
                <React.Fragment>

                    <ul className="list-group m-auto" style={{ maxWidth: "600px" }}>
                        {this.props.posts.map(p =>
                            <li key={p.id} className="list-group-item m-2">
                                <span className="fw-bold">{p.id}</span>
                                {p.title}</li>)
                        }
                    </ul>
                </React.Fragment>
            );
        }
    }
}

export default Posts;