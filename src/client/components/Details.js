import React from 'react';
import Post from './Post';
import $ from 'jQuery';

class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            post: []
        };
    }

    _getPost() {
        return this.state.post.map((post) => {
            return ( 
              <Post 
                key = { post._id }
                post = { post }
                />
            );
        });
    }

    render() {
        const post = this._getPost();
        const thisPost = <div> { post } </div>;

    return (
      <div>
        <h3>Posts</h3>
        {thisPost}
      </div>
    );
  }
}

module.exports = Details;