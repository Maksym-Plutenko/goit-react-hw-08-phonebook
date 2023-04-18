import {ContactForm} from '../components/ContactForm/ContactForm';
import {Filter} from '../components/Filter/Filter';
import {ContactList} from '../components/ContactList/ContactList';

const Contacts = () => {
    return (
           <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
    );
}

export {Contacts};