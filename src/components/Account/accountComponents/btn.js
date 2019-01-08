import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    demo: {
      height: 100,
    },
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });


class TextFields extends React.Component {
  state = {
    name: '',
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;

    return (
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={16}
              className={classes.demo}
              alignItems={alignItems}
              direction={direction}
              justify={justify}
            >
              <Grid item xs={12}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                <div>   
                <Button variant="contained" color="secondary" className={classes.button} href='/Success'>
                  Create Account
                </Button>
              </div>
              </Grid>     
              </Grid>
              </Grid>
              </Grid>
          </Grid>
        </Grid>
      );
    }
  }

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);