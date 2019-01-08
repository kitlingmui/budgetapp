import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import Success from './components/Success'



class App extends Component {
  render () {
    return (
      <>
        <Router>
          <div> 
            <Route exact path='/' component={Home} />
            <Route path='/account' component={Account} />
            <Route path='/success' component={Success} />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
