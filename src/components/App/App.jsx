import ContactList from '../ContactList/ContactList';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <div>
        <h2>Add contact</h2>
        <Form />
      </div>

      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
