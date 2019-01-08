import React, { Component } from 'react';
import Piggy from './homeComponents/piggy.js'
import Text from './homeComponents/text.js'
import Login from './homeComponents/loginBtn.js'
import Create from './homeComponents/createActBtn.js'
import InputEmail from './homeComponents/inputFormEmail.js'
import InputPass from './homeComponents/inputFormPass.js'
import Terms from './homeComponents/terms.js'

class Home extends Component {
  render() {
    return (
      <>
      <Piggy/>
      <Text/>
      <InputEmail/>
      <InputPass/>
      <Login/>
      <Create/>
      <Terms/>
      </>
    );
  }
}

export default Home;


