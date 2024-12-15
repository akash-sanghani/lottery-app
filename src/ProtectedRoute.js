import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

class ProtectedRoute extends React.Component {
  state = {
    isAuthenticated: false,
    isLoading: true,
  };

  async componentDidMount() {
    try {
      await Auth.currentAuthenticatedUser();
      this.setState({ isAuthenticated: true, isLoading: false });
    } catch (err) {
      this.setState({ isAuthenticated: false, isLoading: false });
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { isAuthenticated, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default ProtectedRoute;