import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import AccountInfo from './components/AccountInfo'
import MainPage from './components/MainPage'
import PropTypes from 'prop-types';
import Savings from './components/Savings';
import Spendings from './components/Spendings';
import NavBar from './components/Navbar';
import NavBar2 from './components/Navbar2';






class App extends Component {
  // account
  
  render () {
    
    return (
      
        <Router>
          <div> 
            {/* nav */}
            <NavBar />
            <NavBar2 /> 
            <Route exact path='/' component={Home} />
            <Route path='/Account' component={Account} />
            <Route path='/AccountInfo' component={AccountInfo} />
            <Route path='/Home' component={Home} />
            <Route path='/MainPage' component={MainPage} />
            <Route path='/Savings' component={Savings} />
            <Route path='/Spendings' component={Spendings} />
          </div>
        </Router>
        
    );
  } 
};
App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default App;