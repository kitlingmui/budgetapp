import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button  onClick={this.handleClickOpen}>
        <AddIcon />
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Budget
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <DialogContent>
            <DialogContentText>
              Please add in your budget
            </DialogContentText>
            <TextField InputLabelProps={{ shrink: true }}
              autoFocus
              margin="dense"
              id="date"
              label="Date"
              type="date"
              fullWidth
              InputProps={{ disableUnderline: true, }}
            />
             <TextField
              autoFocus
              margin="dense"
              id="amount"
              label="Amount"
              type="number"
              fullWidth
              InputProps={{ disableUnderline: true, }}
            />
             <TextField
              autoFocus
              margin="dense"
              id="merchant"
              label="Merchant"
              type="string"
              fullWidth
              
            />
             <TextField
              autoFocus
              margin="dense"
              id="reason"
              label="Reason"
              type="string"
              fullWidth
             
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);