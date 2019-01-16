import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PaymentIcon from '@material-ui/icons/Payment';
import PieChartIcon from '@material-ui/icons/PieChart';
import CategoryIcon from '@material-ui/icons/Category';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';    
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ProfileAvatar from './Avatar'
const styles = {
  list: {
    width: 200,
  },

  fullList: {
    width: 'auto',
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bigAvatar: {
    width: 200,
    height: 150,
  },

};



class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
    

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
        { <Avatar className={classes.bigAvatar} alt="Remy Sharp" src="./images/piggy.jpg"/> }
          
        </List>
        <Divider /> 
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Overview
          </Typography>
        <List>
        {['Calendar', 'Transaction', 'Chart', 'Categories','Budgets'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index  === 0 ? <CalendarTodayIcon /> : index  === 1 ? <PaymentIcon /> : 
              index === 2 ? <PieChartIcon /> : index === 3 ?<CategoryIcon /> : <AttachMoneyIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            
          ))}
        </List>
      </div>
    );

 

    return (
      <div>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>      
          <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>  
          <Typography>
          PiggyBank
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