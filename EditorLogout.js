import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

class EditorLogout extends Component {
  componentWillMount() {
      this.props.logoutAdmin();
  }

  render() {
    return <div>Take care!</div>;
  }
}

export default connect(null, actions)(EditorLogout);