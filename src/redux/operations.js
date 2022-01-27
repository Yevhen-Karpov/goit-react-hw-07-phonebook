import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../services/contactsFetch-api';

const getALLContacts = createAsyncThunk('contacts/getALLContacts', async () => {
  const contacts = await contactsApi.fetchContacts();
  return contacts;
});

const addContact = createAsyncThunk('contacts/addContacts', async payload => {
  const contacts = await contactsApi.fetchAddContact(payload);
  return contacts;
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  const contacts = await contactsApi.fetchDeleteContact(id);
  return contacts;
});

const contactsOperations = { getALLContacts, addContact, deleteContact };

export default contactsOperations;
