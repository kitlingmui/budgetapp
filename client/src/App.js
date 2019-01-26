import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import AccountInfo from './components/AccountInfo'
import MainPage from './components/MainPage'
import PropTypes from 'prop-types';
import Savings from './components/Savings';
import Spendings from './components/Spendings';
import NavBar from './components/Navbar';
import AboutUs from './components/AboutUs';
import BudgetSummary from './components/BudgetSummary';
import Login from './components/Login';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';



import { Provider } from 'react-redux';
import store from './store';

//Check Token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decoded));

  //Expired token?
  const currentTime = Date.now()/1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}


class App extends Component {

  render() {

    return (
      <Provider store= { store }>
        <Router>
          <div>
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route path='/Register' component={Register} />
            <Route path='/AccountInfo' component={AccountInfo} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/Home' component={Home} />
            <Route path='/MainPage' component={MainPage} />
            <Route path='/Savings' component={Savings} />
            <Route path='/Spendings' component={Spendings} />
            <Route path='/BudgetSummary' component={BudgetSummary} />
            <Route path='/Login' component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;