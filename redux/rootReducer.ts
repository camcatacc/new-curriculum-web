// Redux modules
import { combineReducers } from "redux";
import uiReducer from "redux/ui/ui";
import contactReducer from "redux/contact/contact";

// Root Reducer
const rootReducer = combineReducers({
	ui: uiReducer,
	contact: contactReducer
});

export default rootReducer;
