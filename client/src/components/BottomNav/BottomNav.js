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
import Fab from '@material-ui/core/Fab';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css'

const styles = {
  appBar: {
    position: "fixed",
    top: 'auto',
    bottom: 0,
    height: 40
  },
  flex: {
    flex: 1,
  },
  fabButton: {
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expense: '', amount: '', value: ''};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
    console.log(event.target.value)
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    var item = {expense: this.state.expense,
                amount: this.state.amount}
    console.log(item)
    this.setState({ open: false });

    }
  state = {
    open: false,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addItem = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
    <div>
        <AppBar color="primary" className={classes.appBar}>
        <Button  onClick={this.handleClickOpen}>
        <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
        </Button>
        </AppBar>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar position='relative'>
            <Toolbar>
              <IconButton color="inherit" onClick={this.addItem} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Budget
              </Typography>
              <form onSubmit={this.handleSubmit}>
              <Button color="inherit" onClick={this.handleSubmit}>
                save
              </Button>
              </form>
            </Toolbar>  
          </AppBar>
          <DialogContent>
            <DialogContentText>
              Please add in your budget
            </DialogContentText>
            <DayPicker canChangeDate={false} />
             <TextField
              autoFocus
              margin="dense"
              id="amount"
              label="Amount"
              type="number"
              name="amount"
              value={this.state.amount} 
              onChange={this.handleChange}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="expense"
              label="Name"
              type="string"
              name="expense"
              value={this.state.expense} 
              onChange={this.handleChange}
              InputLabelProps={{ shrink: true }}
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