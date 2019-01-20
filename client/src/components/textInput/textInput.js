import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class textInput extends Component {
  state = {
    amount: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="filled-adornment-amount"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          label="Amount"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          InputProps={{
            startAdornment: (
              <InputAdornment variant="filled" position="start">
                $
              </InputAdornment>
            ),
          }}
        />     
      </div>
    );
  }
}

textInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(textInput);