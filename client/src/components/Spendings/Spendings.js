import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chart from '../Chart';
import BottomNav from '../BottomNav';
import NavBar from '../Navbar'


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
  }
});

class Spendings extends Component{
  
render() {

  const { classes } = this.props;

  return (
    <>
    <NavBar />
    <Grid container justify="center" alignItems="center"> 
    <h1>Spendings</h1>
    </Grid>
      <Grid container justify="center" alignItems="center"> 
        <Chart />
      </Grid>
      <Grid container justify="center" alignItems="center"> 
        <BottomNav />
      </Grid>
    </>
  )
}
}

Spendings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spendings);