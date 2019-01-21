import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 200,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  dense: {
    marginTop: 16,
    padding: theme.spacing.unit * 10
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class Home extends Component {

  state = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container justify="center" alignItems="center"> 
          <img src="./images/piggy.jpg" alt='piggy'/>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography variant='h6'>Save More,</Typography>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography variant='h6'>Budgeting Made Easy.</Typography>
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">
        <Grid container justify="center" alignItems="center">
        <TextField
        required
          id="HomeEmail"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          InputProps={{disableUnderline: true,}}
        />
        </Grid>
        <Grid container justify="center" alignItems="center">
        <TextField
        required
          id="homePassword"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          InputProps={{disableUnderline: true,}}
        />
      </Grid>
      </form>
      <Grid container justify="center" alignItems="center">
        <Button variant="contained" color="primary" className={classes.button} href='/MainPage'>
          Sign in
        </Button>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Button variant="contained" color="secondary" className={classes.button} href='../Account'>
          Create Account
        </Button>  
      </Grid>
      <Grid container justify="center" alignItems="center">
      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a>
      </div>
      </Grid>
      </>
    )
  }
}
  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Home);




