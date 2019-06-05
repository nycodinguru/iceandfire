import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
//
import store from './store';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Books from './components/Books';
import Characters from './components/Characters';



class App extends Component {
  render() {
    let routes = (
      <Route
        render={ (props) => (
              <Fragment>
                <Navbar />
                <Provider
                  store={store}
                >
                  <Switch><Route
                      exact
                      path="/"
                      render={ props => <Landing />}
                    />
                    <Route
                      exact
                      path="/Books"
                      render={ props => <Books />}
                    />
                    <Route
                      exact
                      path="/Characters"
                      render={ props => <Characters />}
                    />
                  </Switch>
                </Provider>
              <div className="Footer"> Powered by apioficeandfire</div>
              </Fragment>
            )}
          />
      )

      return routes;
  }
}

export default withRouter(App);