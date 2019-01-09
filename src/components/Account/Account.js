import React, { Component } from 'react';
import Piggy from '../Home/homeComponents/piggy.js'
import Header from './accountComponents/header.js'
import FirstName from './accountComponents/firstName.js'
import LastName from './accountComponents/lastName.js'
import Email from './accountComponents/email.js'
import Password from './accountComponents/password.js'
import Button from './accountComponents/btn.js'
import SignIn from './accountComponents/additionalSignIn.js'

class Account extends Component {
    render() {
      return (
        <>
          <Piggy/>
          <Header />
          <FirstName />
          <LastName />
          <Email />
          <Password />
          <Button />
          <SignIn />
        </>
      );
    }
  }
  
  export default Account;
  