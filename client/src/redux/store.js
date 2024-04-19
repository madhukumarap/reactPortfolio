import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice"; // Adjust the import path as necessary

const reducer = combineReducers({
    root: rootReducer
});

const store = configureStore({
    reducer,
});

export default store;
