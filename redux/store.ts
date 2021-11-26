// Redux modules
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "redux/rootReducer";

// Store
export const store = configureStore({
	reducer: rootReducer
});

// Type and hooks
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
