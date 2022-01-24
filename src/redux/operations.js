import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'https://61ea82717bc0550017bc67cd.mockapi.io';

const getALLContacts = () => async dispatch => {
  dispatch(actions.getContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.getContactSuccess(data));
  } catch (error) {
    dispatch(actions.getContactError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};
const contactsOperations = { getALLContacts, addContact, deleteContact };

export default contactsOperations;
