import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className='single-post'>
        <p className='single-post-title'>{this.props.post.title}</p>
        <p className='single-post-text'> {this.props.post.text} </p>
      </div>
    );
  }
}

export default Post;
