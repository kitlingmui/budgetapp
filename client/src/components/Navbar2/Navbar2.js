import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 50
  },
};

class NavBar2 extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Budgets" href='/MainPage' />
          <Tab label="Savings" href='/Savings'/>
          <Tab label="Spendings" href='Spendings'/>
        </Tabs>
      </Paper>
    );
  }
}

NavBar2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar2);