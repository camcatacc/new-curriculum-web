// Redux modules
import { combineReducers } from "redux";
import contactReducer from "redux/contact/contact";

// Root Reducer
const rootReducer = combineReducers({
	contact: contactReducer
});

export default rootReducer;
