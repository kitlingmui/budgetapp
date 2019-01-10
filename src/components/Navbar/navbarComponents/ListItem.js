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

export const mainListItems = (
        <List>
          {['Calendar', 'Transaction', 'Chart', 'Categories','Budgets'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index  === 0 ? <CalendarTodayIcon /> : index  === 1 ? <PaymentIcon /> : 
              index === 2 ? <PieChartIcon /> : index === 3 ?<CategoryIcon /> : <AttachMoneyIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            
          ))}
        </List>);
      
        export const secondaryListItems = (
            <div>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

 

    
  

