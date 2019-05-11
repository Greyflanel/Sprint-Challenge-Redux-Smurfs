import { FETCHING_SMURFS, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF } from "../actions/index.js";


const initialState = {
  smurfs: [],
  inputText: "",
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};



export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });

    case FETCH_SMURF_SUCCESS:
      return Object.assign({}, state, {
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false,
        error: ""
      });

    case FETCH_SMURF_FAIL:
      return Object.assign({}, state, {
        error: action.payload
      });

    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true,
        smurfs: [...state.smurfs, { id: action.id, name: action.name, height: action.height, age: action.age }]
      };

    default:
      return state;
  }
};
