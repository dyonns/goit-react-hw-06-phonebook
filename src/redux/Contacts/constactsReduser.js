import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./contactActions";

const contactsReducer = createReducer([], (bilder) => {
  bilder.addCase(addContact, (state, { payload }) => [...state, payload])
  .addCase(removeContact, (state, {payload}) => state.filter((el) => el.id !== payload))
})

export default contactsReducer;