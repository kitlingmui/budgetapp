import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextInput from '../textInput/textInput'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
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
  main: {
    margin: 50,
    marginLeft: 200,
  },
});

let id = 0;
function createData(name, planamt, realamt) {
  id += 1;
  return { id, name, planamt,realamt };
}

const rows = [
  createData('Income', 159, 6.0),
  createData('Housing', 237, 9.0),
  createData('Utilities', 262, 16.0),
];


class budgetTable extends Component {

  render() {
    const { classes } = this.props;
    return (   
      <>
       <div className={classes.main}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Budget Catagory</CustomTableCell>
                  <CustomTableCell align="center">Plan Amount</CustomTableCell>
                  <CustomTableCell align="center">Real Amount</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow className={classes.row} key={row.id}>
                      <CustomTableCell align="left" component="th" scope="row">
                        {row.name}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        <TextInput/ >
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
      </div>   
      </>
    )
  }   
}

budgetTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(budgetTable);

