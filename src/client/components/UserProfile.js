import React, { Component } from 'react';
import cookie from 'react-cookie';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

import UserInfo from './UserInfo';

class UserProfile extends Component {
  componentWillMount() {
    const userId = cookie.load('uid');
    this.props.fetchUser(userId);
  }

  render() {
    return (
      <UserInfo profile={this.props.username} />
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps, { fetchUser })(UserProfile);