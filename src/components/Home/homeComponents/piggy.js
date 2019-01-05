import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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
});

class InteractiveGrid extends React.Component {
  state = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
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
                                  <img src="./images/piggy.jpg" alt='piggy'/>
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