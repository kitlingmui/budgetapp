import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import AccountInfo from './components/AccountInfo'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import AboutUs from './components/AboutUs'
import Chart from './components/Chart'
import Savings from './components/Savings'
import Spendings from './components/Spendings'


class App extends Component {
  render () {
    return (
      
        <Router>
          <div> 
            <Route exact path='/' component={Home} />
            <Route path='/Account' component={Account} />
            <Route path='/AccountInfo' component={AccountInfo} />
            <Route path='/Home' component={Home} />
            <Route path='/Navbar' component={Navbar} />
            <Route path='/MainPage' component={MainPage} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/Chart' component={Chart} />
            <Route path='/Savings' component={Savings} />
            <Route path='/Spendings' component={Spendings} />
          </div>
        </Router>
      
    )
  }
}

export default App;