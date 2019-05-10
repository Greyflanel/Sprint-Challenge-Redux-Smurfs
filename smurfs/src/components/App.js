import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
      
      </div>
  
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state
  }
}
export default connect(mapStateToProps)(App);
