import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../services/contactsFetch-api';

const getALLContacts = createAsyncThunk(
  'contacts/getALLContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (payload, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchAddContact(payload);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchDeleteContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const contactsOperations = { getALLContacts, addContact, deleteContact };

export default contactsOperations;
