import { composeWithDevTools } from "@redux-devtools/extension";
// import {  createStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/Contacts/constactsReduser";
import filterRreducer from "../redux/Contacts/constactsReduser";

// const userReducer = combineReducers({
//   name: (state = null, action) => {
//     return state;
//   }, 
//   number: (state = null, action) => state, 
// });
const prerloadState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: "",
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterRreducer,
  },
  prerloadState,
})



// export const store = createStore(rootReducer, prerloadState, composeWithDevTools())













