import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
