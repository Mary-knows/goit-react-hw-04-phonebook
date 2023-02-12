// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import './App.css';

export  const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
  

const formSubmit = ({ name, number }) => {
  const contact = { id: nanoid(), name, number };
  if (contacts.some(e => e.name === name)) {
    return alert(`${name} is already in contacts!`);
  }
  setContacts([contact, ...contacts]);
};

const changeFilter = e => {
  setFilter(e.target.value);
};

const getContacts = () => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const deleteContact = contactId => {
  setContacts(contacts =>
    contacts.filter(contact => contact.id !== contactId)
  );
};

  return (<div className='container'>
      <h2>Phonebook</h2>
      <PhoneBookForm
        onSubmit={formSubmit} />
      
      <h2>Contacts</h2>
      <Filter
        value={filter} 
        onChange={changeFilter} />
      
      <ContactsList
        contacts={getContacts()}
        onDelete={deleteContact}/>
  </div>
  )
}
