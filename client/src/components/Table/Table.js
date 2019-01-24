import React, { Component } from 'react';
import PropTypes, { bool } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
// import TextInput from '../textInput/textInput';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { createBudget } from "../../utils/API";
import { getBudget } from "../../utils/API";
import { getmyBudget } from "../../utils/API";
import { deleteExpense } from "../../utils/API";
import { updateExpense } from "../../utils/API";
import Moment from 'moment';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    marginLeft: 10,
  },
  textField: {
    flexBasis: 200,
  },
  logo2:{
    textAlignment: "center"
  }
});

class Table extends Component {
  state = {
    selectedIndex: 0,

    selectedusername: "team6",
    selecteddate: Moment(new Date()).format("YYYY-MM-DD"),
    selectedmonth: Moment(new Date()).format("MM"),
    selectedyear: Moment(new Date()).format("YYYY"),
    allbudgets: [],  // all bgs   
    budgets: [],  // local bg
    mbudgets: [
                {
                  username: 'team6',
                  month: Moment(new Date()).format("MM"),
                  year: Moment(new Date()).format("YYYY"),
                  income: 0,
                  expenses : [
                    {
                      catagory: 'Rent',
                      budgetamt: 0
                    },
                    {
                      catagory: 'Utilites',
                      budgetamt: 0
                    },
                    {
                      catagory: 'Car Insurance',
                      budgetamt: 0
                    },
                  ]
                },      
              ],   // current bg
    initialbudgets: [
                     {
                        username: 'team6',
                        month: Moment(new Date()).format("MM"),
                        year: Moment(new Date()).format("YYYY"),
                        income: 0,
                        expenses : [
                          {
                            catagory: 'Rent',
                            budgetamt: 0
                          },
                          {
                            catagory: 'Utilites',
                            budgetamt: 0
                          },
                          {
                            catagory: 'Car Insurance',
                            budgetamt: 0
                          },
                        ]
                      },      
                    ],
  };

  checkexist = () => {
    console.log(' cal checkexist')
    console.log(this.state.budgets) 
    console.log(this.state.budgets.length) 

    for ( let i=0; i<this.state.mbudgets.length; i++) {
          this.state.budgets[i] = this.state.mbudgets[i] 
          console.log('in loop i')
    }
         
    // if (this.state.budgets.length === 0) {
    //   this.createmybudget(this.state.initialbudgets)
    // }
  }

  // load all budgets when page up
  componentWillMount () {
    this.getallbudget() 
    this.getonebudget( this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear )
  }

  // When the component mounts, load budget
  componentDidMount = () => {
  
    // this.getonebudget( this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear )
    this.checkexist();
    // this.setState({ budgets: this.state.mbudgets });
  }    

  // Whe the component change
  componentDidUpdate (prevProps) {
    this.getonebudget( this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear )
    //  this.state.month = Moment(this.state.enterdate).format("MM")
    //  this.state.year = Moment(this.state.enterdate).format("YYYY") 
    //  console.log("when componentDidUpdate: " + this.state.budgets)
    //   if (this.props.mbudgets !== prevProps) {
    //     this.checkexist();
    //   }
  }
  
  // Get All budget from database
  getallbudget = () => {
    getBudget()
      .then(res => {
        this.setState({ allbudgets: res.data }) 
      })
      .catch(err => console.log(err))
  };

  // Get uer's budget for selected month year 
  getonebudget = ( user, month, year ) => {
    getmyBudget ( user, month, year ) 
      .then(res => {
        this.setState({ 
          budgets: res.data,
        })
      })
      .catch(err => console.log(err))  
  }

  // initial create budget
  createmybudget = bg => {
    createBudget(bg)
      .then(res => this.setState({ allbudgets: res.data }))
      .catch(err => console.log(err));
  }
  

  // Delete an expense from database
  deletemyExpense = id => {
    deleteExpense(id)
      .then(console.log("delete:" + id))
      .catch(err => console.log(err));
  };

  // Update income
  updateincome = id => {
    console.log( this.state.budgets.income )
    // updateExpense(id)
    // .then(console.log("update:" + id))
    // .catch(err => console.log(err));
  }


  // Handle action
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };


  //Handle when Date change
  handleDateChange = event => {
    console.log("update date change")
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    this.state.selectedmonth = Moment(value).format("MM")
    this.state.selectedyear = Moment(value).format("YYYY") 
    console.log(this.state.selectedmonth)
    console.log(this.state.selectedyear)
    this.getonebudget( this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear )
  };


  // Handle when income change
  handleIncomeChange = event => {
    console.log( "update income change")
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

  }

  render() {
    const { classes } = this.props;
    const { currentuser, month, year } = this.state;

    return (
      <div className={classes.root}>
          <List subheader={<ListSubheader className={classes.title}>Select Your Budget Date</ListSubheader>}>
              <ListItem>
                <TextField InputLabelProps={{ shrink: true }}
                    autoFocus
                    margin="dense"
                    id="dateperiod"
                    label=""
                    type="date"
                    fullWidth
                    InputProps={{ disableUnderline: true, }}
                    name="selecteddate"
                    value={this.state.selecteddate}
                    onChange={this.handleDateChange}
                  />               
              </ListItem>
          </List> 
          <Divider/>
          <List subheader={<ListSubheader className={classes.title}>Enter Your Monthly Income</ListSubheader>}>  
             {
                this.state.mbudgets.map( budget =>
                <ListItem>
                    <TextField
                      id={budget._id}
                      label=""
                      name="income"
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{shrink: true,}}
                      InputProps={{
                        startAdornment: <InputAdornment position='start'> $</InputAdornment>,
                        disableUnderline: true,
                      }}
                      margin="normal"
                      value={budget.income}
                      onChange={this.handleIncomeChange}
                    />
                </ListItem>
                )
             }
          </List>  
          <Divider/>    
          <List subheader={<ListSubheader className={classes.title}>Expense</ListSubheader>}>         
              {
                this.state.mbudgets.map( budget =>        
                        budget.expenses.map( ( expense, index) => index > -1
                        ?
                              <ListItem
                                button
                                  selected={this.state.selectedIndex === index}
                                  onClick={event => this.handleListItemClick(event, index) }
                                  key={expense._id}
                              >
                              <ListItemText primary={expense.catagory} />
                              <TextField
                                id={expense._id}
                                label=""
                                name="budgetamt"
                                value={expense.budgetamt}
                                // onChange={() => this.handleExpenseChange(expense._id, expense.budgetamt)}
                                // onChange={event => this.handleInputChange( event, index )}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{shrink: true,}}
                                InputProps={{
                                  startAdornment: <InputAdornment position='start'> $</InputAdornment>,
                                  disableUnderline: true,
                                }}
                                margin="normal"
                              />
                              <ListItemIcon>
                                <DeleteIcon className={classes.logo} onClick={() => this.deletemyExpense(expense._id)}/>
                              </ListItemIcon>
                              </ListItem>
                        : null)              
               )      
             }
          </List>
      </div>
    );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Table);