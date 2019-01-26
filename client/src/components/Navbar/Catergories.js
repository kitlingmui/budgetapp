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
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PaymentIcon from '@material-ui/icons/Payment';
import PieChartIcon from '@material-ui/icons/PieChart';
import CategoryIcon from '@material-ui/icons/Category';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import AccountCircle from '@material-ui/icons/AccountCircle';


const styles = theme =>({

  nested: {
    paddingLeft: theme.spacing.unit * 4,
  }
});



class NestedList extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  
  render() {
    const { classes } = this.props;
    return (
        <List>
          <ListItem button>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PieChartIcon />
      </ListItemIcon>
      <ListItemText primary="Chart" />
    </ListItem>
        <ListItem button >
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Budgets" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
    </List>
  );
}
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NestedList)