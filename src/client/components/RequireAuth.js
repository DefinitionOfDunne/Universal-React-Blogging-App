import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends React.Component {
      static contextTypes = {
        router: React.propTypes.object
      }

      componentWillMount() {
        if(!this.props.authenticated) {
          this.context.router.push('/login');
        }
      }

      componentWillUpdate(nextProps) {
        if(!nextProps.authenticated) {
          this.context.router.push('/login');
        }
      }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
};