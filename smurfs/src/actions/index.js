import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};
export const createSmurf = smurf => {
  const addSmurf = axios.post("http://localhost:3333/smurfs", smurf);
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    addSmurf
      .then(response => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
