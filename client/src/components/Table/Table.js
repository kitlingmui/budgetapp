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
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { createBudget } from "../../utils/API";
import { getBudget } from "../../utils/API";
import { getmyBudget } from "../../utils/API";
import { updatemyBudget } from "../../utils/API";
import { deleteExpense } from "../../utils/API";
import Moment from 'moment';
import Grid from '@material-ui/core/Grid';
import AddTable from './AddTable'

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
  logo2: {
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
    initialbudgets: [ {
                      username: 'team6',
                      month: Moment(new Date()).format("MM"),
                      year: Moment(new Date()).format("YYYY"),   
                      income: 0,
                      expenses: [
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
                      }
                    ],             
    budgets: [], 
    allbudgets: [],          
  };



  // load all budgets when page up
  componentWillMount() {
    // this.createmybudget(this.state.initialbudgets)
    this.getonebudget(this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear) 
  }


  // When the component mounts, load budget
  componentDidMount() {
    this.getallbudget()    
  }

 
  // initial create budget when no budget find
  createmybudget = bg => {
    createBudget(bg)
      .then(res => this.setState({ budgets: res.data }))
      .catch(err => console.log(err));
  }
  
  // Get All budget from database
  getallbudget = () => {
    getBudget()
      .then(res => {
        this.setState({allbudgets: res.data})
      })
      .catch(err => console.log(err))
  };

  // Get uer's budget for selected month year 
  getonebudget = (user, month, year) => {
    getmyBudget(user, month, year)
      .then(res => {
            let budgets = []
            budgets.push(res.data)
            this.setState({budgets})
      })
      .catch(err => console.log(err)) 
  }


  // Update budget
  updatebudget = (id) => {
    updatemyBudget(id)
      .then(res => this.setState({ budgets: res.data }))
      .catch(err => console.log(err))
  }


  // Delete an expense from database
  deletemyExpense = id => {
    deleteExpense(id)
      .then(console.log("delete:" + id))
      .catch(err => console.log(err));
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
    
    let isExist = false
    for (let i=0; i<this.state.allbudgets.length; i++){
      if ( (this.state.allbudgets[i].month == this.state.selectedmonth) && 
           (this.state.allbudgets[i].year == this.state.selectedyear))
      {
        isExist = true
      }
    }

    if (isExist) {
      this.getonebudget(this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear)  
    }
    else {
      console.log('need to create budget for new month')
      let tempbudgets =  [ {
                            username: 'team6',
                            month: this.state.selectedmonth,
                            year: this.state.selectedyear,   
                            income: 0,
                            expenses: [
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
                            }
                          ]       
      this.createmybudget(tempbudgets)
    }
    this.getallbudget()            
  }



  // Handle when income change
      // const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // });
  handleIncomeChange = (e, index) => {
    console.log("update income change")
    let budgets = this.state.budgets
    budgets[index].income = e.target.value
    this.setState({budgets})
    console.log('Input income:' + e.target.value)
  }


  handelExpenseChange = (e, bindex, eindex) => {
    let budgets = this.state.budgets
    budgets[bindex].expenses[eindex].budgetamt = e.target.value
    this.setState({budgets})
    console.log('Input expense value:' + e.target.value)
  }

  // Handle selected expense action
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.root}>
        <List subheader={<ListSubheader className={classes.title}>Select Your Budget Month</ListSubheader>}>
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
        <Divider />
        <List subheader={<ListSubheader className={classes.title}>Enter Your Monthly Income</ListSubheader>}>
          {
            this.state.budgets.length > 0 ?
              this.state.budgets.map((budget, bIndex) => {
                return (
                <ListItem>
                  <TextField
                    id={budget._id}
                    label=""
                    name="income"
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{ shrink: true, }}
                    InputProps={{
                      startAdornment: <InputAdornment position='start'> $</InputAdornment>,
                      disableUnderline: true,
                    }}
                    margin="normal"
                    value={budget.income}
                    onChange={event => this.handleIncomeChange(event, bIndex)}
                />
                </ListItem>
                )
                  }
              ) : null
          }
        </List>
        <Divider />
        <List subheader={<ListSubheader className={classes.title}>Expense</ListSubheader>}>
          {
            this.state.budgets.map((budget, bIndex) =>
              budget.expenses.map((expense, index) => index > -1
                ?
                <ListItem
                  button
                  selected={this.state.selectedIndex === index}
                  onClick={event => this.handleListItemClick(event, index)}
                  key={expense._id}
                >
                  <ListItemText primary={expense.catagory} />
                  <TextField
                    id={expense._id}
                    label=""
                    name="budgetamt"
                    value={expense.budgetamt}
                    onChange={event => this.handelExpenseChange(event, bIndex, index)}                  
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{ shrink: true, }}
                    InputProps={{
                      startAdornment: <InputAdornment position='start'> $</InputAdornment>,
                      disableUnderline: true,
                    }}
                    margin="normal"
                  />
                  <ListItemIcon>
                    <DeleteIcon className={classes.logo} onClick={() => this.deletemyExpense(expense._id)} />
                  </ListItemIcon>
                </ListItem>
                : null)
            )
          }
        </List>
      </div>

 )}  
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Table);