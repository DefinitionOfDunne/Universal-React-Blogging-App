import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class FooterTemplate extends Component {
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

    const d = new Date();
    const year = d.getFullYear();

    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav>
                <ul className="footer-nav">
                  {this.renderLinks()}
                </ul>
              </nav>
              <p className="copyright">© {year}, React Blogging App. Created By @DefinitionOfDunne.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, null)(FooterTemplate);