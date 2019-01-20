import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
    marginTop: 100
  },
});

function ListDividers(props) {
  const { classes } = props;
  return (
    <List component="nav" className={classes.root}>
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button >
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);