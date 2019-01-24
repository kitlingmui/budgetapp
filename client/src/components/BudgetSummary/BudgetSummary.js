import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';
import TextInput from '../textInput/textInput';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "mediumblue",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    width: "100px",
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: 900,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
    width: 900,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class BudgetSummary extends Component {

  state = {
    budgets: [
      {
        id: 0,
        username: 'team6',
        month: 1,
        year: 2019,
        type: 'Income',
        catagory: 'Paycheck1',
        plannedAmt: 0,
        ActualAmt: 0
      },
      {
        id: 1,
        username: 'team6',
        month: 1,
        year: 2019,
        type: 'Income',
        catagory: 'Paycheck2',
        plannedAmt: 0,
        ActualAmt: 0
      },
      {
        id: 2,
        username: 'team6',
        month: 1,
        year: 2019,
        type: 'Expense',
        catagory: 'Rent',
        plannedAmt: 0,
        ActualAmt: 0
      },
      {
        id: 3,
        username: 'team6',
        month: 1,
        year: 2019,
        type: 'Expense',
        catagory: 'Utilities',
        plannedAmt: 0,
        ActualAmt: 0
      },
   ],
  }

  render() {
    const { classes } = this.props;
    const { budgets } = this.state.budgets;

    return (   
      <> 
       <Grid container justify="center" alignItems="center"> 
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>BudgetCatagory</CustomTableCell>
                  <CustomTableCell align="center">Planed Amount</CustomTableCell>
                  <CustomTableCell align="center">Actual Amount</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.budgets.map(row => {
                  return (
                    <TableRow className={classes.row} key={this.state.budgets.id}>
                      <CustomTableCell align="left" component="th" scope="row">
                        {this.state.budgets.catagory}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        'TBA'
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        <TextInput/ >
                      </CustomTableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>    
      </Grid>   
      </>
    )
  }   
}

BudgetSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BudgetSummary);
