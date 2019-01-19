import React, { Component } from 'react';
import Navbar from '../Navbar'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },   
});

class Budget extends Component {
  render() {
    return (
      <>
       <Navbar /> 
       <div>
         <h1>Budget Component to be updated</h1>
       </div>
      </>
    );
  }
}
  
export default Budget;
