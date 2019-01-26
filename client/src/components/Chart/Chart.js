import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';


const data = [
  { name: 'Jan', Savings: 50, Spendings: 300 },
  { name: 'Feb', Savings: 30, Spendings: 400 },
  { name: 'Mar', Savings: 5000, Spendings: 4300 },
  { name: 'Apr', Savings: 4780, Spendings: 2908 },
  { name: 'May', Savings: 5000, Spendings: 4800 },
  { name: 'Jun', Savings: 4390, Spendings: 3800 },
  { name: 'Jul', Savings: 4490, Spendings: 4300 },
  { name: 'Aug', Savings: 4490, Spendings: 4300 },
  { name: 'Sep', Savings: 4490, Spendings: 4300 },
  { name: 'Oct', Savings: 4490, Spendings: 4300 },
  { name: 'Nov', Savings: 4490, Spendings: 4300 },
  { name: 'Dec', Savings: 4490, Spendings: 4300 },
]; 

class Chart extends React.Component {
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
    return (
      <>
      <Grid container justify="center" alignItems="center">
        <MDBContainer>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
        </MDBContainer>
      </Grid>
    </>
    );
  }
}

export default Chart;