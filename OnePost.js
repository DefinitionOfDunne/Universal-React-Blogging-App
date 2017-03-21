const React = require('react');
import Posts from './Posts';

const OnePost = React.createClass({
  render () {
   return (
  <div>
    <Posts />
  </div>
    )
  }
});

module.exports = OnePost; 