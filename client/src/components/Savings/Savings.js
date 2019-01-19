import React, { Component } from 'react';
import Navbar from '../Navbar'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Savings from '../Savings';
import BudgetTable2 from '../BudgetTable2';
import BottomNav from '../BottomNav';
import NavBar2 from '../Navbar2'


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

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center"> 
        <Navbar/ > 
      </Grid>
      <Grid container justify="center" alignItems="center"> 
        <NavBar2 />
      </Grid>
      <Grid container justify="center" alignItems="center"> 
        <Savings />
      </Grid>
      <Grid container justify="center" alignItems="center"> 
        <BudgetTable2 />
      </Grid>
      <Grid container justify="center" alignItems="center"> 
        <BottomNav />
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);