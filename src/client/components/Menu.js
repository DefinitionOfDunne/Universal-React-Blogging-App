const React = require('react');
const { Link } = require('react-router');
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Menu = React.createClass({
  render () {
    return (

    <Navbar>
        <Navbar.Brand>
            <Link to='/'>A Hawtt New Blog</Link>
            </Navbar.Brand>
    <Nav>
        <LinkContainer to='/content'>
            <NavItem>My Posts</NavItem>
        </LinkContainer>
        <LinkContainer to='/about'>
            <NavItem>Bio</NavItem>
        </LinkContainer>
    </Nav>

    <Nav pullRight>
        <LinkContainer to='/'>
            <NavItem>Login</NavItem>
        </LinkContainer>
        <LinkContainer to='/'>
            <NavItem>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to='/editor'>
            <NavItem>Private</NavItem>
        </LinkContainer>
    </Nav>
     </Navbar>
    )
  }
});


module.exports = Menu;

