import React from "react";
import { connect } from "react-redux";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: null,
      height: ""
    };
  }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }
  

  render() {
    return (
        <div>
      <div className="smurf">
        {this.props.smurfs.map( (smurf, index) => (
          <div key={index}>
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>
        ))}
      </div>
      <form onSubmit={this.inputText}>
          <input
            value={this.state.name} 
            onChange={this.handleChange}
            name="name" 
            placeholder=" smurf name"
          />
          <input
            value={this.state.age} 
            onChange={this.handleChange}
            name="age" 
            placeholder=" smurf age"
          />
          <input
            value={this.state.height} 
            onChange={this.handleChange}
            name="height" 
            placeholder=" smurf height"
          />
          <button> Add a Smurf</button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(mapStateToProps)(SmurfForm);
