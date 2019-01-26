import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BottomNav from '../BottomNav';
import NavBar from '../Navbar'
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Typography } from "@material-ui/core";



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 200,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  dense: {
    marginTop: 16,
    padding: theme.spacing.unit * 10
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

class Spendings extends Component{

state = {
  dataDoughnut: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  }
}
  
render() {

  const { classes } = this.props;

  return (
    <>
    <NavBar />
    <Grid container justify="center" alignItems="center"> 
    <h1>Spendings</h1>
    </Grid>
      <Grid container justify="center" alignItems="center"> 
          <Grid container justify="center" alignItems="center">
            <MDBContainer>
              <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
            </MDBContainer>
          </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center"> 
        <BottomNav />
      </Grid>
    </>
  )
}
}

Spendings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spendings);