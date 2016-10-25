const React = require('react');
import Posts from './Posts';

const Content = React.createClass({
  render () {
   return (
  <div>
    <Posts />
  </div>
    )
  }
});

module.exports = Content; 