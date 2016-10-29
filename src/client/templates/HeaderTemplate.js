import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderTemplate extends Component {
  renderLinks() {
    if (this.props.admin) {
      return [
        <li key={1 + 'header'}>
          <Link to='/'>Home</Link>
        </li>,
        <li key={2 + 'header'}>
          <Link to='admin-logout'>Logout</Link>
        </li>,
        <li key={3 + 'header'}>
          <Link to='new-post'>New Post</Link>
        </li>
      ]
    } 
    else if (this.props.authenticated) {
      return [
        <li key={1 + 'header'}>
          <Link to='/'>Home</Link>
        </li>,
        <li key={2 + 'header'}>
          <Link to='logout'>Logout</Link>
        </li>,
        <li key={3 + 'header'}>
          <Link to='archive'>Archive</Link>
        </li>,
        <li key={4 + 'header'}>
          <Link to='profile'>Profile</Link>
        </li>
      ]
    }  else {
      
      return [
      
        <li key={1}>
          <Link to='/'>Home</Link>
        </li>,
        <li key={2}>
          <Link to='login'>Login</Link>
        </li>,
        <li key={3}>
          <Link to='signup'>Sign Up</Link>
        </li>,
        <li key={4}>
          <Link to='archive'>Archive</Link>
        </li>,
        <li key={5}>
        <Link to='editor'>Admin</Link>
        </li>
      ];
    }
  }

  render() {

    return (
      <div>
        <nav className='navbar navbar-default navbar-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#nav-collapse'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className='navbar-brand' to='/'>{this.props.logo}</Link>
          </div>

          <div className='collapse navbar-collapse' id='nav-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              {this.renderLinks()}
            </ul>
          </div>
        </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    admin: state.auth.admin
  };
}

export default connect(mapStateToProps)(HeaderTemplate);