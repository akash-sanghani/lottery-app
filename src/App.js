import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';
import Stats from './Stats';
import History from './History';
import ProtectedRoute from './ProtectedRoute';

class App extends React.Component {
  state = {
    isAuthenticated: false,
  };

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to My React App</h1>
            <Switch>
              <Route
                path="/login"
                render={(props) => <Login onLogin={this.handleLogin} {...props} />}
              />
              <ProtectedRoute path="/home" component={Home} />
              <ProtectedRoute path="/stats" component={Stats} />
              <ProtectedRoute path="/history" component={History} />
              <Route path="/" exact render={() => <div>Home Page</div>} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;