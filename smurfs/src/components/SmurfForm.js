import React from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleAddSmurf = e => {
    e.preventDefault();
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    this.props.createSmurf(newSmurf);
    this.setState({ name: "", age: "", height: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="main">
        {this.props.smurfs.map((smurf, index) => (
          <div className="smurf" key={index}>
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <img
              src="https://vignette.wikia.nocookie.net/smurfs/images/9/95/Clumsy_1.png/revision/latest?cb=20141120070054"
              alt=""
            />
          </div>
        ))}

        <div>
          <input value={this.state.name} onChange={this.handleChange} name="name" placeholder=" smurf name" />
          <input value={this.state.age} onChange={this.handleChange} name="age" placeholder=" smurf age" />
          <input value={this.state.height} onChange={this.handleChange} name="height" placeholder=" smurf height" />
          <button onClick={this.handleAddSmurf}> Add a Smurf</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { createSmurf }
)(SmurfForm);
