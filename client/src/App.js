import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import AccountInfo from './components/AccountInfo'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import AboutUs from './components/AboutUs'
import BudgetPage from './components/BudgetPage'

class App extends Component {
  render () {
    return (
      <>
        <Router>
          <div> 
            <Route exact path='/' component={Home} />
            <Route path='/Account' component={Account} />
            <Route path='/AccountInfo' component={AccountInfo} />
            <Route path='/Home' component={Home} />
            <Route path='/Navbar' component={Navbar} />
            <Route path='/MainPage' component={MainPage} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/BudgetPage' component={BudgetPage} />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
