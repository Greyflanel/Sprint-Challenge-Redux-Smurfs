import React from 'react';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: null,
            height: ""
        }
    }
    render() {
        
        return (
       <div>
           {this.props.smurfs.map( smurf => smurf.name)}
       </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps) (SmurfForm)