import React from 'react';
import { Redirect } from 'react-router-dom';

export default function withProtectedRoute(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (localStorage.getItem('token')) {
        return <WrappedComponent {...this.props} />;
      }

      return <Redirect to="login" />;
    }
  };
}
