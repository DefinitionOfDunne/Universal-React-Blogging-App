import React from 'react';
const { Link } = require('react-router');

const Post = (props) => (
  <Link to={`/archive/${props.post._id}`}>
      <div className='single-post'>
        <p className='single-post-title'>{props.post.title}</p>
        <p className='single-post-author'>{props.post.author}</p>
        <p className='single-post-date'> {props.post.date} </p>
        <p className='single-post-date'> {props.post.text} </p>
      </div>
  </Link>
);  

export default Post;
