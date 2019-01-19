import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TextInput from '../MainPage/mainComponents/textInput';


const CustomTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    width: "100px",
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

let id = 0;
function createData(name, planamt, realamt) {
  id += 1;
  return { id, name, planamt,realamt };
}

const rows = [
  createData('Income', 159, 6.0),
  createData('Housing', 237, 9.0),
  createData('Utilities', 262, 16.0),
];

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <>
      <Grid container justify="center" alignItems="center">
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Income</Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table className={classes.table}>
                <CustomTableCell align="center">
                        <TextInput/ >
                </CustomTableCell>         
            </Table>
          </ExpansionPanelDetails> 
        </ExpansionPanel>
        </Grid>
        <br/>
        <Grid container justify="center" alignItems="center">
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Housing</Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table className={classes.table}>
                <CustomTableCell align="center">
                        <TextInput/ >
                </CustomTableCell>         
            </Table>
          </ExpansionPanelDetails> 
        </ExpansionPanel>
        </Grid>
        <br></br>
        <Grid container justify="center" alignItems="center">
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Utilities</Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table className={classes.table}>
                <CustomTableCell align="center">
                        <TextInput/ >
                </CustomTableCell>         
            </Table>
          </ExpansionPanelDetails> 
        </ExpansionPanel>
        </Grid>
        </>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);