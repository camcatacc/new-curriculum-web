import { combineReducers } from "redux";
import uiReducer from "redux/ui/ui";
import contactReducer from "redux/contact/contact";

const rootReducer = combineReducers({
	ui: uiReducer,
	contact: contactReducer
});

export default rootReducer;
