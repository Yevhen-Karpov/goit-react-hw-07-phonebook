import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import contactsOperations from './operations';

const { getALLContacts, addContact, deleteContact } = contactsOperations;

const contacts = createReducer([], {
  [getALLContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    (state = state.filter(({ id }) => id !== action.payload.id)),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
