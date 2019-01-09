import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import Success from './components/Success'


import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import AboutUs from './components/AboutUs'
import Budget from './components/Budget'

class App extends Component {
  render () {
    return (
      <>
        <Router>
          <div> 
            <Route exact path='/' component={Home} />
            <Route path='/account' component={Account} />
            <Route path='/success' component={Success} />
            <Route path='/Home' component={Home} />
            <Route path='/Navbar' component={Navbar} />
            <Route path='/MainPage' component={MainPage} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/Budget' component={Budget} />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
