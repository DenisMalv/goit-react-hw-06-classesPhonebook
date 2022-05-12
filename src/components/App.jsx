import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      {
        id: '3em',
        name: 'asdasd',
        number: '+420122770',
      },
    ],
    filter: '',
  };

  componentDidMount() {
    const LSContacts = JSON.parse(localStorage.getItem('contacts'));
    if (LSContacts) {
      this.setState({ contacts: LSContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  checkingAddedContact = outName => {
    const res = this.state.contacts.find(({ name }) => name === outName);
    return res;
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(3),
      name,
      number,
    };
    const newContact = this.checkingAddedContact(name);

    newContact
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = contId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contId),
    }));
  };

  handleFilterInput = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { addContact, handleFilterInput, deleteContact } = this;
    const { filter } = this.state;
    const filteredContact = this.getFilteredContacts();

    return (
      <main>
        <h1 className="titlePhonebook">Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2 className="titleContacts">Contacts</h2>
        <Filter value={filter} onChange={handleFilterInput} />
        <ContactList contacts={filteredContact} deleteContact={deleteContact} />
      </main>
    );
  }
}

export default App;
