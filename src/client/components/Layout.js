import React, { Component } from 'react';
import HeaderTemplate from '../templates/HeaderTemplate';
import FooterTemplate from '../templates/FooterTemplate';

class Layout extends Component {
  render() {
    return (
      <div>
      <HeaderTemplate logo="Dylan A. Dunne Tech Blog" />

      <div className="app-container">
        {this.props.children}
      </div>

      <FooterTemplate />
      </div>
    );
  }
}

export default Layout;