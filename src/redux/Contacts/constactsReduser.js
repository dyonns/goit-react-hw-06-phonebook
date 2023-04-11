import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, changeFilter } from './contactActions';

const itemsReducer = createReducer(
  JSON.parse(localStorage.getItem('contacts')) ?? [],
  bilder => {
    bilder
      .addCase(addContact, (state, { payload }) => [...state, payload])
      .addCase(removeContact, (state, { payload }) =>
        state.filter(el => el.id !== payload)
      );
  }
);

const filterInitialState = '';

const filterRreducer = createReducer(filterInitialState, bilder => {
  bilder.addCase(changeFilter, (state, { payload }) => (state = payload));
});

const contactsReduser = combineReducers({
  items: itemsReducer,
  filter: filterRreducer,
});

export default contactsReduser;
