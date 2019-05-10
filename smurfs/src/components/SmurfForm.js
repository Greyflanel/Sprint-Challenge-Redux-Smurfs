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
      <form>
          <input type="text" name="name" placeholder=" smurf name"/>
          <input type="text" name="age" placeholder=" smurf age"/>
          <input type="text" name="height" placeholder=" smurf height"/>
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
