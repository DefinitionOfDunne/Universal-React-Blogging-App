const React = require('react');
const Menu = require('./Menu');
const Footer = require('./Footer');
const Header = require('./Header');

const Layout = (props) => (
  <div className='app-container'>
    <Menu classname='header-nav' />
    {props.children}
    <Footer />
  </div>
)


module.exports = Layout;