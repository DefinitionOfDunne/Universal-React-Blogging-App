const React = require('react');
const Header = require('./Header');
import Posts from './Posts';

const Content = React.createClass({
  render () {
   return (
  <div>
    <Header title='Archives' />
    <Posts />
  </div>
    )
  }
});

module.exports = Content; 