import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';    
import MenuIcon from '@material-ui/icons/Menu'; 
import Typography from '@material-ui/core/Typography';
import ProfileAvatar from './Avatar'
import Catergories from './Catergories'
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const styles = theme =>({
  list: {
    width: 200,
  },

  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bigAvatar: {
    width: 200,
    height: 150,
  },

});



class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false,
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
    

  render() {
    const { classes } = this.props;

    const sideList = (
     <List>
        { <Avatar className={classes.bigAvatar} alt="Remy Sharp" src="./images/piggy.jpg"/> }
          <Divider /> 
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Overview
            </Typography>
        <Catergories/>
      </List>
    );

    return (
      <div>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>      
          <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>  
          <Typography>
          Piggy Bank
          </Typography>
          <ProfileAvatar/>
        </Toolbar>
      </AppBar>
        <SwipeableDrawer
        
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
          x
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
          
        </SwipeableDrawer>  
         
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);