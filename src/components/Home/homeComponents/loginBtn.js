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
    height: 80,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class InteractiveGrid extends React.Component {
  state = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
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
              <Button variant="contained" color="primary" className={classes.button}>
                Sign in
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

InteractiveGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveGrid);