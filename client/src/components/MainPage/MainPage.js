import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BudgetTable from './mainComponents/budgetTable'
import BottomBar from '../Navbar/navbarComponents/BottomBar'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import { Typography } from '@material-ui/core';
import BottomNav from '../BottomNav';
import Table from '../Table/Table'

const data = [
  { name: 'Jan', Savings: 50, Spendings: 300 },
  { name: 'Feb', Savings: 30, Spendings: 400 },
  { name: 'Mar', Savings: 5000, Spendings: 4300 },
  { name: 'Apr', Savings: 4780, Spendings: 2908 },
  { name: 'May', Savings: 5000, Spendings: 4800 },
  { name: 'Jun', Savings: 4390, Spendings: 3800 },
  { name: 'Jul', Savings: 4490, Spendings: 4300 },
  { name: 'Aug', Savings: 4490, Spendings: 4300 },
  { name: 'Sep', Savings: 4490, Spendings: 4300 },
  { name: 'Oct', Savings: 4490, Spendings: 4300 },
  { name: 'Nov', Savings: 4490, Spendings: 4300 },
  { name: 'Dec', Savings: 4490, Spendings: 4300 },
];



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
    textAlign: 'center',
    color: theme.palette.text.secondary,
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



class MainPage extends Component {

  render () {

  const { classes } = this.props;
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
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
  
