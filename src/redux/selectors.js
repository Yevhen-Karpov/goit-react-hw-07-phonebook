export const getContacts = state => state.users.contacts;
export const getFilter = state => state.users.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const getFiteredContacts = contacts => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(text =>
      text.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return getFiteredContacts(contacts);
};
