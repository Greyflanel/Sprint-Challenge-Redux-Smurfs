import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import SmurfForm from './SmurfForm';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }

componentDidMount() {
  this.props.getSmurfs();
}

  render() {
    
    
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
      <SmurfForm />
      </div>
  
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state
  }
}
export default connect(mapStateToProps, { getSmurfs })(App);
