import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(el => el.id !== payload),
      };
    },
    changeFilter: {
      reducer(state, { payload }) {
        return {
          ...state,
          filter: payload,
        };
      },
      prepare(event) {
        return {
          payload: event.target.value,
        }; 
      },
    },
  },
});

export const { add, remove, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
