
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { th } from 'date-fns/esm/locale';
import axios from 'axios';
import FormHelperText from '@material-ui/core/FormHelperText';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';


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
    width: 180,
    height: 45
  },

  input: {
    display: 'none',
  }
});

class Register extends Component {
  state = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/MainPage');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const newUser = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     password: this.state.password,
  //     password2: this.state.password2
  //   }
  //   console.log(newUser)
  // };
  
  handleFormSubmit = event => {
    event.preventDefault();

    console.log('hello')

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <>
        <Grid container justify="center" alignItems="center">
          <img src="./images/piggy.jpg" alt='piggy' />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography variant='h5'>Create My Account</Typography>
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container justify="center" alignItems="center">
            <TextField
              required
              error = {errors.name ? true: false}
              label="Name"
              className={classes.textField}
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              margin="normal"
              InputProps={{ disableUnderline: true, }}
            /> 
            </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              required
              error={errors.email ? true : false}              
              type="email"
              label="Email"
              name="email"
              className={classes.textField}
              margin="normal"
              autoComplete="email"
              InputProps={{ disableUnderline: true, }}
              value={this.state.email}
              onChange={this.onChange}
            />
            <Grid container justify="center" alignItems="center">
              <TextField
                required
                error={errors.password ? true : false}              
                type="password"
                label="Password"
                name="password"
                className={classes.textField}
                margin="normal"
                InputProps={{ disableUnderline: true, }}
                value={this.state.password}
                onChange={this.onChange}
              />
            </Grid>
            <Grid container justify="center" alignItems="center">
              <TextField
                required
                error={errors.password2 ? true : false}              
                type="password"
                label="Confirm Password"
                name="password2"
                className={classes.textField}
                margin="normal"
                InputProps={{ disableUnderline: true, }}
                value={this.state.password2}
                onChange={this.onChange}
              />
            </Grid>
            <Grid container justify="center" alignItems="center">
              <Button variant="contained" color="primary" className={classes.button} onClick={this.handleFormSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <br></br>
        <br></br>
        <Grid container justify="center" alignItems="center">
          <Typography>Already have an account? </Typography><Link to='/Login'>&nbsp;Sign in</Link>
        </Grid>
        <br></br>
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequred,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withStyles(styles)(withRouter(Register)));

// export default withStyles(styles)(Register));
