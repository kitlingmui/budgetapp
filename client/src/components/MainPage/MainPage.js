import React, { Component } from 'react';
import Navbar from '../Navbar'
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

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={24}>
      
        <Navbar/ >
        </Grid>

          <h1 className={classes.paper}>January 2019</h1>
 
        <BudgetTable/ >
   
        <BottomBar/ > */}
     
      <Grid container justify="center" alignItems="center"> 
        <Navbar/ > 
        </Grid>
        <Grid container justify="center" alignItems="center">
        <Typography variant='h5'>Expenses</Typography> 
        <ResponsiveContainer width="99%" height={320} >
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis  />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Savings" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Spendings" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
        </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
  
