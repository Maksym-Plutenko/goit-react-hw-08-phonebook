import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {ContactForm} from '../components/ContactForm/ContactForm';
import {Filter} from '../components/Filter/Filter';
import {ContactList} from '../components/ContactList/ContactList';

import { selectIsLoggedIn } from 'redux/authorization/selectors';

const Contacts = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);


    return (

      <>
      {isLoggedIn ? (
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
        
      ) : (
        <Navigate to="/" />
      )}
    </>





    );
}

export default Contacts;