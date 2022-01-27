import axios from 'axios';

axios.defaults.baseURL = 'https://61ea82717bc0550017bc67cd.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');

  return data;
}
export async function fetchAddContact(payload) {
  const { data } = await axios.post('/contacts', payload);

  return data;
}
export async function fetchDeleteContact(payload) {
  const { data } = await axios.delete(`/contacts/${payload}`);

  return data;
}
