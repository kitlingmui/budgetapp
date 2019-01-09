import React, { Component } from 'react';
import Navbar from '../Navbar'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },   
});

class MainPage extends Component {
  render() {
    return (
      <>
       <Navbar/ > 
       <div>
         <h1>MainPage Component to be update</h1>
       </div>
      </>
    );
  }
}
  
export default MainPage;
