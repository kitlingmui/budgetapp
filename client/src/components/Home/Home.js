import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: './images/background.jpg'
  },
  demo: {
    height: 180,
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
    width: 180,
    height: 45
  },
  input: {
    display: 'none',
  },
  margin: {
    marginTop: 100,
  },
 
});


class Home extends Component {

  state = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/MainPage');
    }
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
    
      <div id='hero'>
        <Grid container justify="center" alignItems="center" className={classes.margin}> 
          <img src="./images/piggy.jpg" alt='piggy'/>
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">
        {/* <Grid container justify="center" alignItems="center" >
        <TextField
        required
          id="HomeEmail"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          InputProps={{ disableUnderline: true, }}
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
          InputProps={{ disableUnderline: true, }}
        />
      </Grid> */}
      </form>

      <Grid container justify="center" alignItems="center">
        <Button  variant="contained" color="primary" className={classes.button} href='/Register'>
          Sign up (It's Free!)
        </Button>
      </Grid>
      
      
      <br></br>
      <Grid container justify="center" alignItems="center">
        <Typography>Have an account?</Typography>
        <a href='../Login'>&nbsp;Sign in</a>
      </Grid>
      <br></br>
      {/* <Grid container justify="center" alignItems="center">
      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a>
      </div>
      </Grid> */}
    </div>
      </>
    )
  }
}
  Home.propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };


const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(withStyles(styles)(Home));