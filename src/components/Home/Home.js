import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Home extends Component {
  render() {

    return (
      <>
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

  <Grid item xs>
    <div>   
        <img src="./images/piggy.jpg"/>
        <h4>15 Bucks little man...</h4>
    </div>
      <br/>
      <br/>
    <div>
      <form> 
        <Input placeholder='Email' />
          <br/>
          <br/>
        <Input placeholder='Password'/>
      </form>
          <br/>
          <br/>
        <Button variant="contained" color="primary">
          Login
        </Button>
          <br/>
          <br/>
        <Button variant="contained" color="primary">
          Create Account
        </Button>
    </div>
    </Grid>
  </Grid>   
       
      </>
    );
  }
}

export default Home;

