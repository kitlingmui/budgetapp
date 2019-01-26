import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions'

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




class Login extends Component {

  state = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  }

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/MainPage');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/MainPage')
    }

    if (nextProps.error) {
      this.setState({errors: nextProps.errors})
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    console.log('hello')

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData);
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;


    return (
      <>
        <Grid container justify="center" alignItems="center" className={classes.margin}>
          <img src="./images/piggy.jpg" alt='piggy' />
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">

          <Grid container justify="center" alignItems="center" >
            <TextField
              required
              error={errors.email ? true : false}
              type="email"
              label="Email"
              className={classes.textField}
              name="email"
              autoComplete="email"
              margin="normal"
              InputProps={{ disableUnderline: true, }}
              value={this.state.email}
              onChange={this.onChange}
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              required
              error={errors.password ? true : false}
              type="password"
              label="Password"
              className={classes.textField}
              margin="normal"
              name="password"
              InputProps={{ disableUnderline: true, }}
              value={this.state.password}
              onChange={this.onChange}
            />
          </Grid>
        </form>
        <Grid container justify="center" alignItems="center">
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleFormSubmit}>
            Sign In
        </Button>
        </Grid>
        <br></br>
        <Grid container justify="center" alignItems="center">
          <Typography>Don't have an account?</Typography>
          <a href='../Register'>&nbsp;Sign up now</a>
        </Grid>
        <br></br>
        {/* <Grid container justify="center" alignItems="center">
      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a>
      </div>
      </Grid> */}
      </>
    )
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(withStyles(styles)(Login));