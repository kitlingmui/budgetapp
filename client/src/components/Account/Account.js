
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios'

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
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });

    const response = fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: `${this.state.firstName}`,
        lastName: `${this.state.lastName}`,
        email: `${this.state.email}`,
        password: `${this.state.password}`})
    })
    // axios.post('/register', {
      // firstName: `${this.state.firstName}`,
      // lastName: `${this.state.lastName}`,
      // email: `${this.state.email}`,
      // password: `${this.state.password}`
    // })
      .then(function (response) {
        console.log(response)
        window.location= './MainPage'
      })
      .catch(function (error) {
        console.log(error);
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
              id="firstName"
              name = "firstName"
              label="First Name"
              className={classes.textField}
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
              margin="normal"
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              className={classes.textField}
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
              margin="normal"
              />
            <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              className={classes.textField}
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              autoComplete="email"
              margin="normal"
              />    
            </Grid>
            <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              className={classes.textField}
              type="password"
              value= {this.state.password}
              onChange={this.handleChange('password')}
              autoComplete="current-password"
              margin="normal"
            />    
            </Grid>
          </Grid>
        </form>
        <Grid container justify="center" alignItems="center">
          <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleFormSubmit} href="/register">
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
  