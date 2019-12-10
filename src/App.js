import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Cities from './components/Cities';
import Itineraries from './components/Itineraries';
import Login from './components/Login';
import store from './store';
import CreateAccount from './components/CreateAccount';
import MyProfile from './components/MyProfile';
import Logout from './components/Logout';


class App extends Component {



  render(){

    if (localStorage.getItem('sessionKey') == null) {
      return(
        <Provider store={store}>
          <React.Fragment>
            <NavigationBar/>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={CreateAccount}/>
                <Route component={Login} />
              </Switch>
            </Router>
          </React.Fragment>
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <React.Fragment>
            <NavigationBar/>
            <Router>
              <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/cities" component={Cities}/>
                <Route path="/cities/:id/itineraries" component={Itineraries}/>
                <Route path="/myprofile" component={MyProfile}/>
                <Route path="/logout" component={Logout}/>
                <Route component={Home} />
              </Switch>
            </Router>
          </React.Fragment>
        </Provider>
      );
    }
  }
}

export default App;