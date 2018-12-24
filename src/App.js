import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Posts from './posts/Posts'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },  
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'right',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Posts/>
      </div>      
    );
  }
}

export default withStyles(styles)(App);