import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';
import { data } from './data';

// reduser
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: data,
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const checkingAddedContact = outName => {
        return state.items.find(({ name }) => name === outName);
      };
      const newContact = checkingAddedContact(action.payload.name);

      const contact = {
        id: nanoid(3),
        name: action.payload.name,
        number: action.payload.number,
      };

      newContact
        ? alert(`${newContact.name} is already in contacts`)
        : state.items.push(contact);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    filterContact: (state, action) => {
      state.filter = action.payload.text;
    },
  },
});

// LS
const persistConfig = {
  key: 'contacts',
  storage,
};
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
