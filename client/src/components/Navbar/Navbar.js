import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Catergories from './Catergories';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PieChartIcon from '@material-ui/icons/PieChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountCircle from '@material-ui/icons/AccountCircle';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    marginTop: 50,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
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
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  appName: {
    fontSize: "18px",
    color: "white",
  }
});


class NavBar extends Component {
  state = {
    left: false,
    open: false,
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  onLogooutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const {isAuthenticated, user } = this.props.auth;


    const { classes } = this.props;
    const { open } = this.state;
    const { value } = this.state;

    const authLinks =(
      <>
        <div className={classes.root}>
          <AppBar position="static">
            <div>
              <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                  <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>
                  <Typography className={classes.appName}>
                    Piggy Bank
                </Typography>
                  <Button
                    buttonRef={node => {
                      this.anchorEl = node;
                    }}
                    aria-owns={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                  >
                    <Avatar alt="Remy Sharp" src={user.avatar} />
                  </Button>
                  <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        id="menu-list-grow"
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList>
                              <MenuItem><Link to='/AccountInfo'>My Account</Link></MenuItem>
                              <MenuItem>
                                <a href="/" onClick={this.onLogooutClick.bind(this)}>Logout</a>
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
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
          </AppBar>
        </div>

        <Paper className={classes.margin}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Budgets" href='/MainPage' />
            <Tab label="Savings" href='/Savings' />
            <Tab label="Spendings" href='/Spendings' />
          </Tabs>
        </Paper>

      </>
    )

    const sideList = (
      <div className={classes.list}>
        <List>
          <Grid container justify="center" alignItems="center">
            <img src="./images/piggy.jpg" alt='piggy' />
          </Grid>
        </List>
        <Divider />
        <List>
          {[<Link to='/AboutUs'>Calender</Link>, <Link to='/AboutUs'>Chart</Link>, <Link to='/AboutUs'>Budgets</Link>, <Link to='/AboutUs'>About Us</Link>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index === 0 ? <CalendarTodayIcon /> : index === 1 ? <PieChartIcon /> :
                index === 2 ? <AttachMoneyIcon /> : index === 3 ? <AccountCircle /> : <AccountCircle />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </div>
    );
    return (
      isAuthenticated ? authLinks: null
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(mapStateToProps, { logoutUser })(withStyles(styles)(NavBar));