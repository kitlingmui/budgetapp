import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 100,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

class Account extends Component {
  state = {
    name: '',
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
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
            <Typography variant='h5'>Sign Up And Get Saving!</Typography>
          </Grid>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="first-name"
              label="First Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="last-name"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              />
            <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="AccountEmail"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              />    
            </Grid>
            <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="AccountPassword"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />    
            </Grid>
          </Grid>
        </form>
        <Grid container justify="center" alignItems="center">
          <Button variant="contained" color="secondary" className={classes.button} href='/MainPage'>
            Create Account
          </Button>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography>Already have an account? </Typography><Link to='/'> Sign in </Link>
        </Grid>
        </>
      );
    }
  }

  Account.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Account);
  