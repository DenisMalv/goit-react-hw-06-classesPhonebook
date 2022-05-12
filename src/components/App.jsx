import React, { Component } from 'react';

import { connect } from 'react-redux';
import { mapStateToProps } from 'redux/classes/mapStateToProps';

import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  render() {
    return (
      <main>
        <h1 className="titlePhonebook">Phonebook</h1>
        <ContactForm />

        <h2 className="titleContacts">Contacts</h2>
        <Filter />
        <ContactList />
      </main>
    );
  }
}

export default connect(mapStateToProps, null)(App);
