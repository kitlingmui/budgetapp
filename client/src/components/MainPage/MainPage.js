import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//import BudgetTable2 from '../BudgetTable2';
import BottomNav from '../BottomNav';

import Table from '../MainPage/mainComponents/Table'




const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
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
    <>
      <Grid container justify="center" alignItems="center"> 
        
      </Grid>
      <Grid container justify="center" alignItems="center"> 
       
      </Grid>
      <Grid container justify="center" alignItems="center"> 
        <Table />
      </Grid>
      <Grid container justify="center" alignItems="center"> 
        <BottomNav />
      </Grid>
    </>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
  
