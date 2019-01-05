import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  }
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
                          <form className={classes.container} noValidate autoComplete="off">
                              <TextField
                                id="outlined-email-input"
                                label="Email"
                                className={classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                              />
                            </form>
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




