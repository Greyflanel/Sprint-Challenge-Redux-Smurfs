import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "SMURF_FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
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
// export const addSmurf = () => dispatch => {}