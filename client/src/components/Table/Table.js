import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import TextInput from '../textInput/textInput';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  }
});

class Table extends Component {
  state = {
    selectedIndex: 1,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <List subheader={<ListSubheader className={classes.title}>Select Your Budget Date</ListSubheader>}>
              <ListItem>
                  <TextField InputLabelProps={{ shrink: true }}
                    autoFocus
                    margin="dense"
                    id="date"
                    label=""
                    type="date"
                    fullWidth
                    InputProps={{ disableUnderline: true, }}
                  />
              </ListItem>
          </List> 
          <Divider/>
          <List subheader={<ListSubheader className={classes.title}>Enter Your Total Income</ListSubheader>}>  
              <ListItem>
                <TextInput/ >
              </ListItem>
          </List>  
          <Divider/>
          <List subheader={<ListSubheader className={classes.title}>Expense</ListSubheader>}>    
              <ListItem
                button
                selected={this.state.selectedIndex === 2}
                onClick={event => this.handleListItemClick(event, 2)}
              >
                <ListItemText primary="Rent" />
                <TextInput/ >
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>

              <ListItem
                button
                selected={this.state.selectedIndex === 3}
                onClick={event => this.handleListItemClick(event, 3)}
              >
                <ListItemText primary="Utilites" />
                <TextInput/ >
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>

              <ListItem
                button
                selected={this.state.selectedIndex === 4}
                onClick={event => this.handleListItemClick(event, 4)}
              >
                <ListItemText primary="Car insurance" />
                <TextInput/ >
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>

          </List>
      </div>
    );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Table);