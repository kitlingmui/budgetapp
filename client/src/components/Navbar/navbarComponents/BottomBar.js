import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    text: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },

    list: {
      marginBottom: theme.spacing.unit * 2,
    },

    appBar: {
      top: 'auto',
      bottom: 0,
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },

  });
  function BottomAppBar(props) {
    const { classes } = props;
    return (
<AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Fab color="secondary" aria-label="Add">
            <AddIcon />
          </Fab>
          <div>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
 );
}

BottomAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BottomAppBar);