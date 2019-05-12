import { FETCHING_SMURFS, ERROR, FETCH_SMURF_SUCCESS } from "../actions/index.js";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case FETCH_SMURF_SUCCESS:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        addingSmurf: false,
        error: null
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
