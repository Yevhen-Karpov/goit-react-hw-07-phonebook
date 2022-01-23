import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'https://61ea82717bc0550017bc67cd.mockapi.io';

const getALLContacts = () => dispatch => {
  dispatch(actions.getContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.getContactSuccess(data)))
    .catch(error => dispatch(actions.getContactError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
const contactsOperations = { getALLContacts, addContact, deleteContact };

export default contactsOperations;
