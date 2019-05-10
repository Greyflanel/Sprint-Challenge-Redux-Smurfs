import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "SMURF_FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";


export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURFS})
  axios
  .get(`http://localhost:3333/smurfs`)
  .then(res => {
    dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
  })
  .catch(error => {
    dispatch({type: FETCH_SMURF_FAIL, payload: error })
  })
}
export const addSmurf = (name, age, height, id) => dispatch => {
  dispatch({type: ADD_SMURF})
  const newSmurf = {
    name: this.state.name,
    age: this.state.age,
    height: this.state.height
  }
  axios
  .post("http://localhost:3333/smurfs", {
    name: name,
    age: age,
    height: height,
    id: id
  })
  .then(res => 
    this.setState({smurfs: res.data})
  )
  .catch(error => console.log(error))
}