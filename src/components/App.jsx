import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from '../redux/authorization/selectors';
import {refreshUser} from '../redux/authorization/operations';

// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

import { Layout } from './Layout/Layout';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Contacts } from '../pages/Contacts';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>


    isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    )
  );
};

export { App };
