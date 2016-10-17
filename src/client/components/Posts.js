import React from 'react';
import Post from './Post';
import $ from 'jQuery';

class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    _getPosts() {
        return this.state.posts.map((post) => {
            return ( 
              <Post 
                key = { post._id }
                post = { post }
                />
            );
        });
    }

    _fetchPosts() {
        $.ajax({
            method: 'GET',
            url: 'api/posts',
            success: (posts) => {
            this.setState({ posts });
            }
        });
    }

    componentWillMount() {
        this._fetchPosts();
    }

    render() {
        const posts = this._getPosts();
        const allPosts = <div> { posts } </div>;

    return (
      <div>
        <h3>Posts</h3>
        {allPosts}
      </div>
    );
  }
}

module.exports = Posts;