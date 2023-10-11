import { combineReducers } from "redux";

import countReducer from "./counterReducer";

const reducers = 
combineReducers({count:countReducer});

export default reducers;
